Corrector = {};
Corrector.Selector = {};
Corrector.Selector.getSelected = function(){

  var t = '';

  if (window.getSelection) {
    t = window.getSelection();
  } else if(document.getSelection) {
    t = document.getSelection();
  } else if(document.selection) {
    t = document.selection.createRange().text;
  }

  return t;

}

Corrector.Selector.createOverlay = function(){
  var $el = $('<div class="overlay"><input type="text" /></div>');
  $el.on("mouseup", function(e) {
    e.stopPropagation();
  })
  $el.on("mousedown", function(e) {
    e.stopPropagation();
  })
  Corrector.Selector.Overlay = $el;
  return $el;
}

Corrector.Selector.onMouseDown = function(e){
  if (Corrector.Selector.Overlay) {
    var $el = Corrector.Selector.Overlay;
    $el.remove();
  }
};

Corrector.Selector.onMouseUp = function(e){

  var st = Corrector.Selector.getSelected();

  if (st != '') {
    console.log(st.toString());
  setTimeout(function() {
    var $overlay = Corrector.Selector.createOverlay();
    $("body").append($overlay);
    $overlay.css({ top: e.pageY, left: e.pageX })
  }, 100);

  }

}
