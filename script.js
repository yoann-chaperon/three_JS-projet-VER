const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setClearColor(0x01);
            document.body.appendChild( renderer.domElement );

//----------------- VER -----------
 
let forme = new THREE.Group();

let geometrie = new THREE.TorusKnotGeometry(18, 6, 90, 50);

let materiel = new THREE.MeshNormalMaterial({
    color: 0xff000,
    transparent: true,
    opacity: 1,
    wireframe: true,
    wireframeLinewidth: 10,
    wireframeLinejoin: 'round',
    wireframeLinecap: 'round'
});
camera.position.z = 50;
forme.add(new THREE.Mesh(geometrie, materiel));

scene.add(forme);

const animate = function(){
    requestAnimationFrame(animate);
        forme.rotation.x += 0.001;
        forme.rotation.y += 0.001;
        forme.rotation.z += 0.001;
        renderer.render(scene, camera)
}
animate();