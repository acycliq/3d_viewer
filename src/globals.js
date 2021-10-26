// variables in the global scope
var CAMERA,
    SCENE,
    RENDERER,
    CONTROLS,
    CANVAS,
    all_geneData,
    worker,
    geneNames,
    configSettings,
    legend_added = false, //used to make sure the listener is attached only once
    genePanel,
    light,
    instancedMesh,
    particles,
    particlesMaterial,
    particlesGeometry,
    MOUSE = new THREE.Vector2(),
    RAYCASTER = new THREE.Raycaster(),
    axes,
    c2s, //camera to scene distance
    _c2s = NaN;
