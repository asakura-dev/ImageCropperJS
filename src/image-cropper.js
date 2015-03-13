(function ($) {
  "use strict";
  
  // class: Cropper
  // ユーザは，Cropperクラスのインスタンスを生成し，
  // インスタンスのメソッドを用いて，画像の回転や拡大率などを操作する
  //// constructor
  var Cropper = function($container){
    // キャンバス群を内包するコンテナ要素
    this.$container = $container;
    // 画像を描画するキャンバス要素
    this.$canvas = $container.children(".ic_canvas");
    // 切り抜き範囲を指し示すための半透明フレームを描画するキャンバス要素
    this.$cover_canvas = $container.children(".ic_cover_canvas");
    // 切り抜いた画像を描画するキャンバス要素
    this.$crop = $container.children(".ic_crop");
    // それぞれのコンテキスト
    this.ctx = this.getExtendedCanvasContext(this.$canvas);
    this.cover_ctx = this.getExtendedCanvasContext(this.$cover_canvas);
    this.crop_ctx = this.getExtendedCanvasContext(this.$crop);
  };
  //// methods
  $.extend(Cropper.prototype,{
    // 引数に与えられたキャンバス要素のコンテキストを返す
    // コンテキストは少し拡張する
    getExtendedCanvasContext: function($canvas){
      var ctx = $canvas.get(0).getContext('2d');
      // 幅，高さをコンテキスト自体に持たせる(アクセスしやすいため)
      ctx.width = $canvas.width();
      ctx.height = $canvas.height();
      // method : 描画をリセットする
      ctx.clear = function(){
        this.clearRect(0,0,this.width,this.height);
      }
      // method : 拡張drawImageメソッド
      // 画像を角度を指定して描画する
      // xおよびyは，それぞれ，キャンバスの左上から回転後の画像の左上までの距離
      ctx.drawImageWithAngle = function(image,x,y,width,height,angle){
        // キャンバス初期化
        ctx.clear();
        // スタックに追加
        ctx.save();
        // 基準点を中心にする
        ctx.translate(this.width/2,this.height/2);
        // 基準点を反時計周りにradだけ回転
        var rad = angle * (Math.PI / 180);
        ctx.rotate(rad);
        // 基準点を元のキャンバスの左上が回転後にある位置にする
        // 例：反時計周りに90度回転させると，左上の座標は左下当たりに移動する
        // WIP
        if(angle == 90){
          
        }
        ctx.translate(-1 * (c_width/2), -1 * (c_height / 2));
      }
        return ctx;
    },
    rotateRight: function(){
      
    },
    rotateLeft: function(){
    },
    zoom: function(){
    }
  });
  
  // class: ImageCropper
  // jQueryプラグイン用のクラス
  // $.imageCropperでインスタンスにアクセスできるようにする
  //// constructor
  var ImageCropper = function () {
    //propaties
    // these will be changed by option argumetns of init
  };
  //// methods
  $.extend(ImageCropper.prototype, {
    // 引数に渡した要素内にCanvas要素とかを追加して
    // 画像操作用のインスタンスを返す
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
      var $container = $(target_element).eq(0);
      $container.append('<canvas class="ic_canvas"'+
                      'width="'+config.canvas.width+'"height="'+config.canvas.height+'">'+
                      '</canvas>'+
                      '<canvas class="ic_cover_canvas"'+
                      'width="'+config.canvas.width+'"height="'+config.canvas.height+'">'+
                      '</canvas>'+
                      '<canvas class="ic_crop"'+
                      'width="'+config.crop.width+'" height="'+config.crop.height+'">'+
                      '</canvas>');
      return new Cropper($container);
    }
  });
  //// $.imageCropperを追加
  $.extend({
    imageCropper: new ImageCropper()
  });
})(jQuery);