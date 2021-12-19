import "./style.css";
import * as THREE from "three";
import { EventDispatcher } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
group.position.y = 1;
group.scale.x = 0.5;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);

group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);

cube2.position.set(-2, 0, 1);

group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" })
);

cube3.position.set(2, 0, 1);

group.add(cube3);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// // mesh.position.x = 0.7;
// // mesh.position.y = -0.6;
// // mesh.position.z = 1;
// mesh.position.set(0.7, -0.6, 1);

// scene.add(mesh);

// // console.log(mesh.position.length());
// // console.log(mesh.position.distanceTo(new THREE.Vector3(0, 1, 2)));
// // mesh.position.normalize();

// // Scale
// // mesh.scale.x = 2;
// // mesh.scale.y = .5;
// mesh.scale.set(2, 0.5, 0.5);

// // Rotation 순서가 영향을 줌. Reorder 사용
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI * 0.5;
// mesh.rotation.x = Math.PI * 0.25;

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

// camera.lookAt(new THREE.Vector3(3, 0, 0));
// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
