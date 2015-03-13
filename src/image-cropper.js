(function ($) {
  "use strict";
  var Cropper = function($wrapper){
    this.$wrapper = $wrapper;
    this.$canvas = $wrapper.children(".ic_canvas");
    this.$cover_canvas = $wrapper.children(".ic_cover_canvas");
    this.$crop = $wrapper.children(".ic_crop");
  };
  $.extend(Cropper.prototype,{
    
  });
  
  // constructor
  var ImageCropper = function () {
    //propaties
    // these will be changed by option argumetns of init
  };
  // method
  $.extend(ImageCropper.prototype, {
    init: function (target_element, options) {
      // default configuration values
      var config = {
        canvas: {
          width: "500px",
          height: "300px"
        },
        crop: {
          width: "300px",
          height: "280px"
        }
      };
      // apply option values
      if (options) {
        if (options.canvas) {
          config.canvas = options.canvas;
        }
        if (options.crop) {
          config.crop = options.crop;
        }
      }
      if (!$(target_element)) {
        return;
      } 
      var $wrapper = $(target_element).eq(0);
      $wrapper.append('<canvas class="ic_canvas"'+
                      'width="'+config.canvas.width+'"height="'+config.canvas.height+'">'+
                      '</canvas>'+
                      '<canvas class="ic_cover_canvas"'+
                      'width="'+config.canvas.width+'"height="'+config.canvas.height+'">'+
                      '</canvas>'+
                      '<canvas class="ic_crop"'+
                      'width="'+config.crop.width+'" height="'+config.crop.height+'">'+
                      '</canvas>');
      return new Cropper($wrapper);
    }
  });
  $.extend({
    imageCropper: new ImageCropper()
    
  });
})(jQuery);












