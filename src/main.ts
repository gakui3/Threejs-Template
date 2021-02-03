import * as THREE from 'three';
import testVert from './shaders/test.vert';
import testFrag from './shaders/test.frag';

(function () {
  const canvas: any = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(800, 600);
  document.body.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 10000);
  camera.position.set(0, 0, 1000);
  const geometry = new THREE.BoxGeometry(250, 250, 250);
  //const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });

  const mat = new THREE.ShaderMaterial({
    vertexShader: testVert,
    fragmentShader: testFrag,
  });

  const box = new THREE.Mesh(geometry, mat);
  box.position.z = -5;
  scene.add(box);

  const tick = (): void => {
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
  };
  tick();
})();
