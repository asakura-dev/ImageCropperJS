(function($){
  // constructor
  var ImageCropper = function(){
    //propaties
    // these will be changed by option argumetns of init
    this.canvas = {
      width: "500px",
      height: "300px",
    };
    this.crop = {
      width: "200px",
      height: "280px",
    };
  }
  // method
  $.extend(ImageCropper.prototype, {
    init: function(target_element,options){
      if(options){
        if(options["canvas"]){
        }
      }
    }
  });
  $.extend({
    imageCropper: new ImageCropper()
    
  });
})(jQuery);












