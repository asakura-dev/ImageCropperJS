$(function(){
  var cropper = $.imageCropper.new(".crop-container",{
    canvas : {
      width : "500px",
      height : "300px"
    },
    crop : {
      width : "200px",
      height : "280px",
    }
  });
  
  cropper.attach({
    load: "#loadFile",
    rotateRight: "#rotateRight",
    rotateLeft : "#rotateLeft",
    zoom : "#zoom",
    output: "#download_canvas_image"
  });
});