

function glyphSettings()
{
    var out = [


        {gene: 'Snca',          taxonomy: 'in_general',  glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Cplx2',         taxonomy: 'in_general',  glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Lhx6',          taxonomy: 'in_general',  glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Col25a1',       taxonomy: 'in_general',  glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: 'Pnoc',          taxonomy: 'in_general',  glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Rab3c',         taxonomy: 'in_general',  glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
        {gene: 'Gad1',          taxonomy: 'in_general',  glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
        {gene: 'Slc6a1',        taxonomy: 'in_general',  glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Th',            taxonomy: 'sst',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Crhbp',         taxonomy: 'sst',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Sst',           taxonomy: 'sst',         glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Npy',           taxonomy: 'sst',         glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Synpr',         taxonomy: 'sst',         glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
        {gene: 'Chodl',         taxonomy: 'sst',         glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Cort',          taxonomy: 'sst',         glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
        {gene: 'Reln',          taxonomy: 'sst',         glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: 'Serpini1',      taxonomy: 'sst',         glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
        {gene: 'Satb1',         taxonomy: 'sst',         glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Grin3a',        taxonomy: 'sst',         glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
        {gene: 'Tac1',          taxonomy: 'pvalb',       glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Pvalb',         taxonomy: 'pvalb',       glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Kcnip2',        taxonomy: 'pvalb',       glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Thsd7a',        taxonomy: 'pvalb',       glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
        {gene: 'Cox6a2',        taxonomy: 'pvalb',       glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
        {gene: 'Chrm2',         taxonomy: 'pvalb',       glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
        {gene: 'Id2',           taxonomy: 'ngf',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Hapln1',        taxonomy: 'ngf',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Gabrd',         taxonomy: 'ngf',         glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Cryab',         taxonomy: 'ngf',         glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
        {gene: 'Kit',           taxonomy: 'ngf',         glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Ndnf',          taxonomy: 'ngf',         glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
        {gene: 'Nos1',          taxonomy: 'ngf',         glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: 'Lamp5',         taxonomy: 'ngf',         glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Cplx3',         taxonomy: 'ngf',         glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Cadps2',        taxonomy: 'cxcl14',      glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Cxcl14',        taxonomy: 'cxcl14',      glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Ntng1',         taxonomy: 'cxcl14',      glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Cpne5',         taxonomy: 'cxcl14',      glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
        {gene: 'Rgs12',         taxonomy: 'cxcl14',      glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Sncg',          taxonomy: 'cnr1',        glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Cnr1',          taxonomy: 'cnr1',        glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Cck',           taxonomy: 'cnr1',        glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Trp53i11',      taxonomy: 'cnr1',        glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
        {gene: 'Sema3c',        taxonomy: 'cnr1',        glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Syt6',          taxonomy: 'cnr1',        glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: 'Yjefn3',        taxonomy: 'cnr1',        glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
        {gene: 'Rgs10',         taxonomy: 'cnr1',        glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Nov',           taxonomy: 'cnr1',        glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
        {gene: 'Kctd12',        taxonomy: 'cnr1',        glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
        {gene: 'Slc17a8',       taxonomy: 'cnr1',        glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Tac2',          taxonomy: 'vip',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Npy2r',         taxonomy: 'vip',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Calb2',         taxonomy: 'vip',         glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Htr3a',         taxonomy: 'vip',         glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Slc5a7',        taxonomy: 'vip',         glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
        {gene: 'Penk',          taxonomy: 'vip',         glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Pthlh',         taxonomy: 'vip',         glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: 'Vip',           taxonomy: 'vip',         glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
        {gene: 'Crh',           taxonomy: 'vip',         glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Qrfpr',         taxonomy: 'vip',         glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
        {gene: 'Zcchc12',       taxonomy: 'less_active', glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Calb1',         taxonomy: 'less_active', glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Vsnl1',         taxonomy: 'less_active', glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Tmsb10',        taxonomy: 'less_active', glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
        {gene: 'Rbp4',          taxonomy: 'less_active', glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
        {gene: 'Fxyd6',         taxonomy: 'less_active', glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: '6330403K07Rik', taxonomy: 'less_active', glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
        {gene: 'Scg2',          taxonomy: 'less_active', glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Gap43',         taxonomy: 'less_active', glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
        {gene: 'Nrsn1',         taxonomy: 'less_active', glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Gda',           taxonomy: 'pc_or_in',    glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Bcl11b',        taxonomy: 'pc_or_in',    glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Rgs4',          taxonomy: 'pc_or_in',    glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Slc24a2',       taxonomy: 'pc_or_in',    glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Lphn2',         taxonomy: 'pc_or_in',    glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
        {gene: 'Adgrl2',        taxonomy: 'pc_or_in',    glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
        {gene: 'Map2',          taxonomy: 'pc_or_in',    glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Prkca',         taxonomy: 'pc_or_in',    glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
        {gene: 'Cdh13',         taxonomy: 'pc_or_in',    glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: 'Atp1b1',        taxonomy: 'pc_or_in',    glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
        {gene: 'Pde1a',         taxonomy: 'pc_or_in',    glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
        {gene: 'Calm2',         taxonomy: 'pc_or_in',    glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Sema3e',        taxonomy: 'pc_or_in',    glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Nrn1',          taxonomy: 'pc',          glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Pcp4',          taxonomy: 'pc',          glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Rprm',          taxonomy: 'pc',          glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Enpp2',         taxonomy: 'pc',          glyphSymbol: 'x', specificity: 'Neuron',  glyphName: 'cross'},
        {gene: 'Rorb',          taxonomy: 'pc',          glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Rasgrf2',       taxonomy: 'pc',          glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Wfs1',          taxonomy: 'pc',          glyphSymbol: 'd', specificity: 'Neuron',  glyphName: 'diamond'},
        {gene: 'Fos',           taxonomy: 'pc',          glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        {gene: 'Plcxd2',        taxonomy: 'pc',          glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
        {gene: 'Crym',          taxonomy: 'pc',          glyphSymbol: '<', specificity: 'Neuron',  glyphName: 'triangleLeft'},
        {gene: '3110035E14Rik', taxonomy: 'pc',          glyphSymbol: '^', specificity: 'Neuron',  glyphName: 'triangleUp'},
        {gene: 'Foxp2',         taxonomy: 'pc',          glyphSymbol: 'p', specificity: 'Neuron',  glyphName: 'star5'},
        {gene: 'Pvrl3',         taxonomy: 'pc',          glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Neurod6',       taxonomy: 'pc2',         glyphSymbol: '+', specificity: 'Neuron',  glyphName: 'plus'},
        {gene: 'Nr4a2',         taxonomy: 'pc2',         glyphSymbol: 'o', specificity: 'Neuron',  glyphName: 'circle'},
        {gene: 'Cux2',          taxonomy: 'pc2',         glyphSymbol: '*', specificity: 'Neuron',  glyphName: 'asterisk'},
        {gene: 'Kcnk2',         taxonomy: 'pc2',         glyphSymbol: '.', specificity: 'Neuron',  glyphName: 'point'},
        {gene: 'Arpp21',        taxonomy: 'pc2',         glyphSymbol: 's', specificity: 'Neuron',  glyphName: 'square'},
        {gene: 'Enc1',          taxonomy: 'pc2',         glyphSymbol: 'v', specificity: 'Neuron',  glyphName: 'triangleDown'},
        {gene: 'Fam19a1',       taxonomy: 'pc2',         glyphSymbol: '>', specificity: 'Neuron',  glyphName: 'triangleRight'},
        // {gene: 'Vim',           taxonomy: 'non_neuron',  glyphSymbol: '*', specificity: 'NonNeuron',  glyphName: 'asterisk'},
        // {gene: 'Slc1a2',        taxonomy: 'non_neuron',  glyphSymbol: '.', specificity: 'NonNeuron',  glyphName: 'point'},
        {gene: 'Pax6',          taxonomy: 'non_neuron',  glyphSymbol: 's', specificity: 'NonNeuron',  glyphName: 'square'},
        // {gene: 'Plp1',          taxonomy: 'non_neuron',  glyphSymbol: 'x', specificity: 'NonNeuron',  glyphName: 'cross'},
        // {gene: 'Mal',           taxonomy: 'non_neuron',  glyphSymbol: '+', specificity: 'NonNeuron',  glyphName: 'plus'},
        // {gene: 'Aldoc',         taxonomy: 'non_neuron',  glyphSymbol: 'o', specificity: 'NonNeuron',  glyphName: 'circle'},
        {gene: 'Actb',          taxonomy: 'non_neuron',  glyphSymbol: 'v', specificity: 'NonNeuron',  glyphName: 'triangleDown'},
        {gene: 'Sulf2',         taxonomy: 'non_neuron',  glyphSymbol: 'p', specificity: 'NonNeuron',  glyphName: 'star5'},


        {gene: 'Rgs5', taxonomy: 'VECA', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Flt1', taxonomy: 'VECA', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Igf2', taxonomy: 'VECA', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Epas1', taxonomy: 'VECA', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Bsg', taxonomy: 'VECV', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Itm2a', taxonomy: 'VECV', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Ly6c1', taxonomy: 'VECV', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Car4', taxonomy: 'VECV', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Pltp', taxonomy: 'VECV', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Vim', taxonomy: 'VECA', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Crip1', taxonomy: 'VSMCA', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Acta2', taxonomy: 'VSMCA', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Myl9', taxonomy: 'VSMCA', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Tagln', taxonomy: 'VSMCA', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Ptgds', taxonomy: 'VLMC', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Igfbp2', taxonomy: 'VLMC', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Dcn', taxonomy: 'VLMC', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Nupr1', taxonomy: 'VLMC', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Mgp', taxonomy: 'ABC', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Rbp1', taxonomy: 'ABC', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Fn1', taxonomy: 'ABC', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Igfbp6', taxonomy: 'ABC', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Cldn5', taxonomy: 'PER', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Igfbp7', taxonomy: 'PER', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Vtn', taxonomy: 'PER', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Sparc', taxonomy: 'PER', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Ctla2a', taxonomy: 'PER', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Higd1b', taxonomy: 'PER', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Pglyrp1', taxonomy: 'PER', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Myl12a', taxonomy: 'PER', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Gng11', taxonomy: 'PER', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Serpinh1', taxonomy: 'PER', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Rhoc', taxonomy: 'PER', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Col4a1', taxonomy: 'PER', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Hexb', taxonomy: 'MGL', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Ctss', taxonomy: 'MGL', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'C1qa', taxonomy: 'MGL', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'P2ry12', taxonomy: 'MGL', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'C1qb', taxonomy: 'MGL', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Ccl4', taxonomy: 'MGL', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Lyz2', taxonomy: 'PVM', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Pf4', taxonomy: 'PVM', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'C1qc', taxonomy: 'PVM', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Fcer1g', taxonomy: 'PVM', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Tyrobp', taxonomy: 'PVM', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Cd9', taxonomy: 'COP', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Frmd4a', taxonomy: 'COP', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Gpr17', taxonomy: 'COP', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Nfasc', taxonomy: 'NFOL', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Sirt2', taxonomy: 'NFOL', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Marcks', taxonomy: 'NFOL', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Rras2', taxonomy: 'NFOL', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Arpc1b', taxonomy: 'NFOL', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Tsc22d4', taxonomy: 'NFOL', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Qk', taxonomy: 'NFOL', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Gng12', taxonomy: 'NFOL', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Gm15440', taxonomy: 'NFOL', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Trf', taxonomy: 'MOL', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Mog', taxonomy: 'MOL', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Apod', taxonomy: 'MOL', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Plp1', taxonomy: 'MOL', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'S100b', taxonomy: 'MOL', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Gltp', taxonomy: 'MOL', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Ppp1r14a', taxonomy: 'MOL', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Car2', taxonomy: 'MOL', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Fa2h', taxonomy: 'MOL', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Klk6', taxonomy: 'MOL', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Gjb1', taxonomy: 'MOL', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Sepp1', taxonomy: 'MOL', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Gsn', taxonomy: 'MOL', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Mal', taxonomy: 'MOL2', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Pllp', taxonomy: 'MOL2', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Cdkn1c', taxonomy: 'MOL2', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Mag', taxonomy: 'MFOL', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Mobp', taxonomy: 'MFOL', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Opalin', taxonomy: 'MFOL', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Tspan2', taxonomy: 'MFOL', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Grb14', taxonomy: 'MFOL', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Olig1', taxonomy: 'MFOL', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Tmem141', taxonomy: 'MFOL', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Pdlim2', taxonomy: 'MFOL', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Cd81', taxonomy: 'MFOL', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Slc1a3', taxonomy: 'ACBG', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Gfap', taxonomy: 'ACMB', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Aqp4', taxonomy: 'ACMB', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Slc6a11', taxonomy: 'ACOB', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Slc1a2', taxonomy: 'ACTE', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Aldoc', taxonomy: 'ACTE', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Ttr', taxonomy: 'CHOR', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        // {gene: 'Enpp2', taxonomy: 'CHOR', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: '1500015O10Rik', taxonomy: 'CHOR', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Fxyd1', taxonomy: 'CHOR', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Sostdc1', taxonomy: 'CHOR', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: '1110017D15Rik', taxonomy: 'EPEN', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Ccdc153', taxonomy: 'EPEN', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Tmem212', taxonomy: 'EPEN', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Foxj1', taxonomy: 'EPEN', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Rarres2', taxonomy: 'EPEN', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Dbi', taxonomy: 'EPSC', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Fos', taxonomy: 'EPSC', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Ifitm3', taxonomy: 'EPSC', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Rsph1', taxonomy: 'EPSC', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Jun', taxonomy: 'EPSC', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Mia', taxonomy: 'EPSC', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Car8', taxonomy: 'CBPC', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Ppp1r1b', taxonomy: 'MSN', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Arpp21', taxonomy: 'MSN', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Pde10a', taxonomy: 'MSN', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Efr3a', taxonomy: 'HBGLU', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Slc17a6', taxonomy: 'HBGLU', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Snap25', taxonomy: 'HBGLU', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Cabp7', taxonomy: 'HBGLU', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Gls', taxonomy: 'HBGLU', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Peg3', taxonomy: 'HBSER', glyphSymbol: '^', specificity: 'NonNeuron', glyphName: 'triangleUp'},
        {gene: 'Cntn1', taxonomy: 'HBSER', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Hs6st2', taxonomy: 'HBSER', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'En1', taxonomy: 'MBDOP', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Irs4', taxonomy: 'HBINH', glyphSymbol: 'v', specificity: 'NonNeuron', glyphName: 'triangleDown'},
        {gene: 'Lhx8', taxonomy: 'DECHO', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Syt4', taxonomy: 'HBCHO', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Vat1l', taxonomy: 'HBCHO', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Pde6g', taxonomy: 'DETPH', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Sag', taxonomy: 'DETPH', glyphSymbol: '.', specificity: 'NonNeuron', glyphName: 'point'},
        {gene: 'Gnb3', taxonomy: 'DETPH', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},
        {gene: 'Igfbpl1', taxonomy: 'DGNBL', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Doc2g', taxonomy: 'OBNBL', glyphSymbol: 'd', specificity: 'NonNeuron', glyphName: 'diamond'},
        {gene: 'Cdhr1', taxonomy: 'OBNBL', glyphSymbol: '<', specificity: 'NonNeuron', glyphName: 'triangleLeft'},
        {gene: 'Nmb', taxonomy: 'OBNBL', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'A230065H16Rik', taxonomy: 'SEPNBL', glyphSymbol: 'h', specificity: 'NonNeuron', glyphName: 'star6'},
        {gene: 'Hmgb2', taxonomy: 'SZNBL', glyphSymbol: 'p', specificity: 'NonNeuron', glyphName: 'star5'},
        {gene: 'Fabp7', taxonomy: 'OEC', glyphSymbol: 's', specificity: 'NonNeuron', glyphName: 'square'},
        {gene: 'Rgcc', taxonomy: 'SATG', glyphSymbol: '+', specificity: 'NonNeuron', glyphName: 'plus'},
        {gene: 'Sfrp5', taxonomy: 'SATG', glyphSymbol: 'o', specificity: 'NonNeuron', glyphName: 'circle'},
        {gene: 'Fbln5', taxonomy: 'SATG', glyphSymbol: '*', specificity: 'NonNeuron', glyphName: 'asterisk'},
        {gene: 'Fbln2', taxonomy: 'SATG', glyphSymbol: '>', specificity: 'NonNeuron', glyphName: 'triangleRight'},
        {gene: 'Ube2c', taxonomy: 'SATG', glyphSymbol: 'x', specificity: 'NonNeuron', glyphName: 'cross'},

        {gene: 'Rgs17',         taxonomy: 'cxcl14',      glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Slc17a7',       taxonomy: 'cnr1',        glyphSymbol: 'h', specificity: 'Neuron',  glyphName: 'star6'},
        {gene: 'Generic',       taxonomy: 'generic',     glyphSymbol: 'o',  glyphName: 'circle'},

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

                                                    y === 'VECA'? hsv2hex(0.02, 1, 1):
                                                        y === 'VECV'? hsv2hex(0.98, 1, 1):
                                                            y === 'VLMC'? hsv2hex(.95, .5, .6):
                                                                y === 'ABC'? hsv2hex(.95, .5, .6):
                                                                    y === 'PER'? hsv2hex(0, .5, 1):
                                                                        y === 'VSMCA'? hsv2hex(.0, .8, .6):


                                                                            y === 'MGL'? hsv2hex(.1, 1, .6):
                                                                                y === 'PVM'? hsv2hex(.1, 1, .6):

                                                                                // % oligodendrocytes
                                                                                    y === 'COP'? hsv2hex(.6, .2, .5):
                                                                                        y === 'NFOL'? hsv2hex(.6, .2, .5):
                                                                                            y === 'MOL'? hsv2hex(.65, .1, .75):
                                                                                                y === 'MOL2'? hsv2hex(.7, 0, 1):
                                                                                                    y === 'MFOL'? hsv2hex(.7, 0, 1):

                                                                                                        // % astrocytes
                                                                                                        y === 'ACMB'? hsv2hex(.5,1,1):
                                                                                                            y === 'ACBG'? hsv2hex(.5,1,1):
                                                                                                                y === 'ACTE'? hsv2hex(.5,1,1):
                                                                                                                    y === 'ACOB'? hsv2hex(.5,1,1):

                                                                                                                        // % choroid
                                                                                                                        y === 'CHOR'? hsv2hex( .13, .6, .8):

                                                                                                                            // % ependymal
                                                                                                                            y === 'EPEN'? hsv2hex( .19, 1, 1):
                                                                                                                                y === 'EPSC'? hsv2hex( .19, 1, 1):

                                                                                                                                    // % neurons 1
                                                                                                                                    y === 'CBPC'? hsv2hex(1/3, 1, 1):
                                                                                                                                        y === 'MSN'? hsv2hex(1/3, 1, 1):
                                                                                                                                            y === 'HBGLU'? hsv2hex(1/3, 1, 1):
                                                                                                                                                y === 'HBSER'? hsv2hex(1/3, 1, 1):
                                                                                                                                                    y === 'MBDOP'?  hsv2hex(1/3, 1, 1): // THIS SHOULD BE: Colors(30,:);

                                                                                                                                                        // % neurons 2
                                                                                                                                                        y === 'HBINH'? hsv2hex(.27, 1, .7):
                                                                                                                                                                y === 'HBCHO'? hsv2hex(.27, 1, .7):
                                                                                                                                                                    y === 'DECHO'? hsv2hex(.27, 1, .7):

                                                                                                                                                                        // % neuroblasts
                                                                                                                                                                        y === 'DGNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                            y === 'OBNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                                y === 'SEPNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                                    y === 'SZNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                                        y === 'DETPH'? hsv2hex(.4, .5, .5):

                                                                                                                                                                                            // % sattelite glia and ensheathing cells
                                                                                                                                                                                            y === 'SATG'? hsv2hex(2/3, 1, 1):
                                                                                                                                                                                                y === 'OEC'? hsv2hex(2/3, 1, 1):
                                                                                                                                                                                                    '#FD6A02';
}