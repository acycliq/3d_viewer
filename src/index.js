// variables in the global scope
var camera, scene, renderer, controls, all_geneData, worker;
// let raycaster;

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
// const vertex = new THREE.Vector3();
// const color = new THREE.Color();

console.log('in index.js')

function run() {
    console.log('app starts');
    configSettings = config();

    fetcher([configSettings.geneData]).then(
        result => make_package(result),
        error => alert(error) // doesn't run
    );
}


const fetcher = (filenames) => {
    return Promise.all(
        filenames.map(d => fetch(d).then(res => res.json()))
    )
};


function make_package(result) {
    var workPackage = result.reduce((a, b) => a.concat(b), []);
    workPackage.forEach(d => d.root_name = d.name.split('_')[0]);
    workPackage.forEach(d => d.bytes_streamed = 0); //will keep how many bytes have been streamed
    workPackage.forEach(d => d.data = []);          //will keep the actual data from the flatfiles
    workPackage.forEach(d => d.data_length = 0);    //will keep the number of points that have been fetched
    // workPackage = d3.map(workPackage, d => d.name.split('.')[0]);
    // workPackage = workPackage.map(d => [d.name, d.download_url, d.size]);
    data_loader(workPackage);

    console.log(result)
}

function postLoad(arr) {
    //Do some basic post-processing/cleaning

    var _cellBoundaries = arr[0];
    //for some reason which I havent investigated, some cells do not have boundaries. Remove those cells
    var null_coords = _cellBoundaries.filter(d => {
        return d.coords === null
    });
    if (null_coords) {
        null_coords.forEach(d => {
            console.log('Cell_id: ' + d.cell_id + ' doesnt have boundaries')
        })
    }

    // If you need to remove the cells with no boundaries uncomment the line below:
    // _cellBoundaries = _cellBoundaries.filter(d => { return d.coords != null });

    var _cellData = arr[1];
    //stick the aggregated metrics
    var agg = aggregate(_cellData);
    _cellData.forEach((d, i) => {
        d.topClass = d.ClassName[maxIndex(d.Prob)]; // Keeps the class with the highest probability
        d.agg = agg[i];
    });

    // make sure the arrays are sorted by Cell_Num
    _cellData = _cellData.sort(function (a, b) {
        return a.Cell_Num - b.Cell_Num
    });
    _cellBoundaries = _cellBoundaries.sort(function (a, b) {
        return a.Cell_Num - b.Cell_Num
    });

    return [_cellBoundaries, _cellData]
}

function maxIndex(data) {
    //returns the index of the max of the input array.
    return data.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
}

function aggregate(data) {
    var cellColorRamp = classColorsCodes();
    var cellColorMap = d3.map(cellColorRamp, function (d) {
        return d.className;
    });


//     for (var i = 0; i < data.length; ++i) {
//         data[i].managedData = managedData[i]
//     }
    function aggregator(data) {
        var out;
        out = d3.nest()
            .key(function (d) {
                return d.IdentifiedType;
            }) //group by IdentifiedType
            .rollup(function (leaves) {
                return {
                    Prob: d3.sum(leaves, function (d) {
                        return d.Prob;
                    }), //sum all the values with the same IdentifiedType
                    color: leaves[0].color //Get the first color code. All codes with the same IdentifiedType are the same anyway
                }
            }).entries(data)
            .map(function (d) {
                return {IdentifiedType: d.key, Prob: d.value.Prob, color: d.value.color};
            });

        // sort in decreasing order
        out.sort(function (x, y) {
            return d3.ascending(y.Prob, x.Prob);
        });

        return out
    }

    function dataManager(data) {
        var chartData = [];
        for (var i = 0; i < data.length; ++i) {
            var temp = [];
            for (var j = 0; j < data[i].ClassName.length; ++j) {
                // console.log(data[i].ClassName[j])
                temp.push({
                    IdentifiedType: cellColorMap.get(data[i].ClassName[j]).IdentifiedType,
                    color: cellColorMap.get(data[i].ClassName[j]).color,
                    Prob: data[i].Prob[j] ? data[i].Prob[j] : [data[i].Prob] //Maybe that one is better
                })
            }
            var agg = aggregator(temp);
            chartData.push({
                X: data[i].X,
                Y: data[i].Y,
                GeneCountTotal: data[i].CellGeneCount.reduce((a, b) => a + b, 0), //get the sum of all the elements in the array
                IdentifiedType: agg[0].IdentifiedType,
                color: agg[0].color,
                Prob: agg[0].Prob,
                // renderOrder: sectionFeatures.renderOrder(agg[0].IdentifiedType),

            })
        }

        return chartData
    }

    var aggData = dataManager(data);
    return aggData
}
