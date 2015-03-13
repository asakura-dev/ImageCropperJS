$(function(){
  $.imageCropper.init(".crop-container",{
    canvas : {
      width : "500px",
      height : "300px"
    },
    crop : {
      width : "200px",
      height : "280px",
    }
  });
});