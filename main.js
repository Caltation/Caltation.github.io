import { createGameScene } from "./gameScene.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  let canvas = document.getElementById("canvas");
  let engine = new BABYLON.Engine(canvas, true);

  let scene = createGameScene(canvas, engine);
  let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
  
  engine.runRenderLoop(function() {
    scene.render();
  });

  window.addEventListener("resize", function() {
  	engine.resize()
  });
};