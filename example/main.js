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
  // 右回転
  $("#rotateRight").on("click",function(){
    cropper.rotateRight();
  });
  
  // 左回転
  $("#rotateleft").on("click",function(){
    cropper.rotateLeft();
  });
  cropper.attach("#uploadFile","upload");
});