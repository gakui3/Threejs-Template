import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import React from 'react';
import ReactDOM from 'react-dom/client';

import testVert from './shaders/test.vert';
import testFrag from './shaders/test.frag';

import { App } from './Components/App.jsx';

let canvas, renderer, scene, camera, geometry, gui;

const param = {
  value01: 1.0,
  value02: true,
  value03: 1.0,
  value04: 'hoge01',
};

function init() {
  // canvas = document.querySelector("#c");
  // renderer = new THREE.WebGLRenderer({ canvas });
  // document.body.appendChild(renderer.domElement);
  // scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xffff00);

  const root = ReactDOM.createRoot(document.getElementById('uis'));
  console.log(root);
  root.render(<App />);
}

function addCamera() {
  camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100);
  camera.position.set(0, 0, -10);
  camera.aspect = canvas.clientWidth / canvas.clientHeight;

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();
}

function addObject() {
  geometry = new THREE.BoxGeometry(3, 3, 3);

  const mat = new THREE.ShaderMaterial({
    vertexShader: testVert,
    fragmentShader: testFrag,
  });

  const box = new THREE.Mesh(geometry, mat);
  scene.add(box);
}

function update() {
  requestAnimationFrame(update);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  // const pixelRatio = window.devicePixelRatio;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

(function () {
  init();
  // addCamera();
  // addObject();
  // update();
})();
