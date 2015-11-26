document.addEventListener("DOMContentLoaded", function() {
	var scene= new THREE.Scene();
  var innerWidth = window.innerWidth;
  var innerHeight = window.innerHeight;
  var aspectRatio = innerWidth/innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  renderer.setSize(innerWidth, innerHeight);
  document.body.insertBefore(renderer.domElement, document.body.firstChild);

  var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshNormalMaterial();
  var cube = new THREE.Mesh(geometry,material);
  scene.add(cube);

  camera.position.z = 5;

  var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
  };

  render();
});
