

function glyphSettings()
{
    var out = [

        {gene: 'Snca',          taxonomy: 'in_general',  glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Cplx2',         taxonomy: 'in_general',  glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Lhx6',          taxonomy: 'in_general',  glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Col25a1',       taxonomy: 'in_general',  glyphSymbol: '^',  glyphName: 'point'},
        {gene: 'Pnoc',          taxonomy: 'in_general',  glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Rab3c',         taxonomy: 'in_general',  glyphSymbol: '<',  glyphName: 'point'},
        {gene: 'Gad1',          taxonomy: 'in_general',  glyphSymbol: 'p',  glyphName: 'point'},
        {gene: 'Slc6a1',        taxonomy: 'in_general',  glyphSymbol: 'h',  glyphName: 'point'},
        {gene: 'Th',            taxonomy: 'sst',         glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Crhbp',         taxonomy: 'sst',         glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Sst',           taxonomy: 'sst',         glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Npy',           taxonomy: 'sst',         glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Synpr',         taxonomy: 'sst',         glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Chodl',         taxonomy: 'sst',         glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Cort',          taxonomy: 'sst',         glyphSymbol: 'd',  glyphName: 'point'},
        {gene: 'Reln',          taxonomy: 'sst',         glyphSymbol: '^',  glyphName: 'point'},
        {gene: 'Serpini1',      taxonomy: 'sst',         glyphSymbol: '<',  glyphName: 'point'},
        {gene: 'Satb1',         taxonomy: 'sst',         glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Grin3a',        taxonomy: 'sst',         glyphSymbol: 'p',  glyphName: 'point'},
        {gene: 'Tac1',          taxonomy: 'pvalb',       glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Pvalb',         taxonomy: 'pvalb',       glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Kcnip2',        taxonomy: 'pvalb',       glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Thsd7a',        taxonomy: 'pvalb',       glyphSymbol: 'd',  glyphName: 'point'},
        {gene: 'Cox6a2',        taxonomy: 'pvalb',       glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Chrm2',         taxonomy: 'pvalb',       glyphSymbol: 'p',  glyphName: 'point'},
        {gene: 'Id2',           taxonomy: 'ngf',         glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Hapln1',        taxonomy: 'ngf',         glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Gabrd',         taxonomy: 'ngf',         glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Cryab',         taxonomy: 'ngf',         glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Kit',           taxonomy: 'ngf',         glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Ndnf',          taxonomy: 'ngf',         glyphSymbol: 'd',  glyphName: 'point'},
        {gene: 'Nos1',          taxonomy: 'ngf',         glyphSymbol: '^',  glyphName: 'point'},
        {gene: 'Lamp5',         taxonomy: 'ngf',         glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Cplx3',         taxonomy: 'ngf',         glyphSymbol: 'h',  glyphName: 'point'},
        {gene: 'Cadps2',        taxonomy: 'cxcl14',      glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Cxcl14',        taxonomy: 'cxcl14',      glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Ntng1',         taxonomy: 'cxcl14',      glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Cpne5',         taxonomy: 'cxcl14',      glyphSymbol: 'd',  glyphName: 'point'},
        {gene: 'Rgs12',         taxonomy: 'cxcl14',      glyphSymbol: 'h',  glyphName: 'point'},
        {gene: 'Sncg',          taxonomy: 'cnr1',        glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Cnr1',          taxonomy: 'cnr1',        glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Cck',           taxonomy: 'cnr1',        glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Trp53i11',      taxonomy: 'cnr1',        glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Sema3c',        taxonomy: 'cnr1',        glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Syt6',          taxonomy: 'cnr1',        glyphSymbol: '^',  glyphName: 'point'},
        {gene: 'Yjefn3',        taxonomy: 'cnr1',        glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Rgs10',         taxonomy: 'cnr1',        glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Nov',           taxonomy: 'cnr1',        glyphSymbol: '<',  glyphName: 'point'},
        {gene: 'Kctd12',        taxonomy: 'cnr1',        glyphSymbol: 'p',  glyphName: 'point'},
        {gene: 'Slc17a8',       taxonomy: 'cnr1',        glyphSymbol: 'h',  glyphName: 'point'},
        {gene: 'Tac2',          taxonomy: 'vip',         glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Npy2r',         taxonomy: 'vip',         glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Calb2',         taxonomy: 'vip',         glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Htr3a',         taxonomy: 'vip',         glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Slc5a7',        taxonomy: 'vip',         glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Penk',          taxonomy: 'vip',         glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Pthlh',         taxonomy: 'vip',         glyphSymbol: '^',  glyphName: 'point'},
        {gene: 'Vip',           taxonomy: 'vip',         glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Crh',           taxonomy: 'vip',         glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Qrfpr',         taxonomy: 'vip',         glyphSymbol: 'p',  glyphName: 'point'},
        {gene: 'Zcchc12',       taxonomy: 'less_active', glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Calb1',         taxonomy: 'less_active', glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Vsnl1',         taxonomy: 'less_active', glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Tmsb10',        taxonomy: 'less_active', glyphSymbol: 'd',  glyphName: 'point'},
        {gene: 'Rbp4',          taxonomy: 'less_active', glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Fxyd6',         taxonomy: 'less_active', glyphSymbol: '^',  glyphName: 'point'},
        {gene: '6330403K07Rik', taxonomy: 'less_active', glyphSymbol: '<',  glyphName: 'point'},
        {gene: 'Scg2',          taxonomy: 'less_active', glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Gap43',         taxonomy: 'less_active', glyphSymbol: 'p',  glyphName: 'point'},
        {gene: 'Nrsn1',         taxonomy: 'less_active', glyphSymbol: 'h',  glyphName: 'point'},
        {gene: 'Gda',           taxonomy: 'pc_or_in',    glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Bcl11b',        taxonomy: 'pc_or_in',    glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Rgs4',          taxonomy: 'pc_or_in',    glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Slc24a2',       taxonomy: 'pc_or_in',    glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Lphn2',         taxonomy: 'pc_or_in',    glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Adgrl2',        taxonomy: 'pc_or_in',    glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Map2',          taxonomy: 'pc_or_in',    glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Prkca',         taxonomy: 'pc_or_in',    glyphSymbol: 'd',  glyphName: 'point'},
        {gene: 'Cdh13',         taxonomy: 'pc_or_in',    glyphSymbol: '^',  glyphName: 'point'},
        {gene: 'Atp1b1',        taxonomy: 'pc_or_in',    glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Pde1a',         taxonomy: 'pc_or_in',    glyphSymbol: '<',  glyphName: 'point'},
        {gene: 'Calm2',         taxonomy: 'pc_or_in',    glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Sema3e',        taxonomy: 'pc_or_in',    glyphSymbol: 'h',  glyphName: 'point'},
        {gene: 'Nrn1',          taxonomy: 'pc',          glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Pcp4',          taxonomy: 'pc',          glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Rprm',          taxonomy: 'pc',          glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Enpp2',         taxonomy: 'pc',          glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Rorb',          taxonomy: 'pc',          glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Rasgrf2',       taxonomy: 'pc',          glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Wfs1',          taxonomy: 'pc',          glyphSymbol: 'd',  glyphName: 'point'},
        {gene: 'Fos',           taxonomy: 'pc',          glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Plcxd2',        taxonomy: 'pc',          glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Crym',          taxonomy: 'pc',          glyphSymbol: '<',  glyphName: 'point'},
        {gene: '3110035E14Rik', taxonomy: 'pc',          glyphSymbol: '^',  glyphName: 'point'},
        {gene: 'Foxp2',         taxonomy: 'pc',          glyphSymbol: 'p',  glyphName: 'point'},
        {gene: 'Pvrl3',         taxonomy: 'pc',          glyphSymbol: 'h',  glyphName: 'point'},
        {gene: 'Neurod6',       taxonomy: 'pc2',         glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Nr4a2',         taxonomy: 'pc2',         glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Cux2',          taxonomy: 'pc2',         glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Kcnk2',         taxonomy: 'pc2',         glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Arpp21',        taxonomy: 'pc2',         glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Enc1',          taxonomy: 'pc2',         glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Fam19a1',       taxonomy: 'pc2',         glyphSymbol: '>',  glyphName: 'point'},
        {gene: 'Vim',           taxonomy: 'non_neuron',  glyphSymbol: '*',  glyphName: 'point'},
        {gene: 'Slc1a2',        taxonomy: 'non_neuron',  glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Pax6',          taxonomy: 'non_neuron',  glyphSymbol: 's',  glyphName: 'point'},
        {gene: 'Plp1',          taxonomy: 'non_neuron',  glyphSymbol: 'x',  glyphName: 'point'},
        {gene: 'Mal',           taxonomy: 'non_neuron',  glyphSymbol: '+',  glyphName: 'point'},
        {gene: 'Aldoc',         taxonomy: 'non_neuron',  glyphSymbol: 'o',  glyphName: 'point'},
        {gene: 'Actb',          taxonomy: 'non_neuron',  glyphSymbol: 'v',  glyphName: 'point'},
        {gene: 'Sulf2',         taxonomy: 'non_neuron',  glyphSymbol: 'p',  glyphName: 'point'},

        {gene: 'Generic',       taxonomy: 'generic',     glyphSymbol: 'o',  glyphName: 'point'},

        ];

    return out
}

//create color ramp.
function glyphColor(y) {
    return y === 'non_neuron' ? '#FFFFFF' : //hsv: [0 0 1]);
        y === 'pc_or_in' ? '#407F59' :      //hsv: [.4 .5 .5]);
            y === 'less_active' ? '#96B38F' :   //hsv: [.3 .2 .7]);
                y === 'pc' ? '#00FF00' :            //hsv: [1/3 1 1]);
                    y === 'pc2' ? '#44B300' :           //hsv: [.27 1 .7]);
                        y === 'in_general' ? '#0000FF' :    //hsv: [2/3 1 1]);
                            y === 'sst' ? '#00B3FF' :           //hsv: [.55 1 1]);
                                y === 'pvalb' ? '#5C33FF' :         //hsv: [.7 .8 1]);
                                    y === 'ngf' ? '#FF00E6' :           //hsv: [.85 1 1]);
                                        y === 'cnr1' ? '#FF0000' :          //hsv: [ 1 1 1]);
                                            y === 'vip' ? '#FFC700' :           //hsv: [.13 1 1]);
                                                y === 'cxcl14' ? '#995C00' :        //hsv: [.1 1 .6]);
                                                    '#FD6A02';
}