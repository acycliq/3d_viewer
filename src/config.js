function config() {
    var ini = [
        {   // 1.
            name: 'default',
            img_width: 5905,
            img_height: 5882,
            img_depth: 15 * 6.0121,
            particle_size: 8000.0,
            // zThres: 1500.0,
            geneData: 'https://www.googleapis.com/storage/v1/b/dxn_temp/o/without_single_page_cells/geneData.tsv',
            cellData: 'https://www.googleapis.com/storage/v1/b/dxn_temp/o/without_single_page_cells/cellData.tsv',
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}
