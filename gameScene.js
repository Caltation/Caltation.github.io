let createGameScene = function(canvas, engine) {
  // Create scene
  let scene = new BABYLON.Scene(engine);

  // Create camera
  let camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(2, 2, 2), scene);
  camera.attachControl(canvas, true);
  camera.setTarget(BABYLON.Vector3.Zero());

  // Create lights
  let light = new BABYLON.HemisphericLight("myLight", new BABYLON.Vector3(1, 1, 0), scene);

  return scene;
};

export {
  createGameScene
};