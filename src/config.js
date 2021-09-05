function config() {
    var ini = [
        {   // 1.
            name: 'default',
            img_width: 1260,
            img_height: 340,
            img_depth: 60,
            geneData: 'https://www.googleapis.com/storage/v1/b/3d-viewer/o/data/geneData/geneData.tsv',
        },
        {   // 1.
            name: 'vizgen',
            img_width: 98824,
            img_height: 77294,
            img_depth: 12,
            geneData: 'https://api.github.com/repos/acycliq/MsBrain_Eg1_VS6_JH_V6/contents/region_0/geneData?ref=master',
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}

