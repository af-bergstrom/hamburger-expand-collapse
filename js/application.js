(function () {
  window.setTimeout(function(){
    document.getElementsByTagName('span')[0].setAttribute('class', 'mdm-layer to-arrow-top');
  }, 1000);
  window.setTimeout(function(){
    document.getElementsByTagName('span')[1].setAttribute('class', 'mdm-layer to-arrow-right');
  }, 1500);
  window.setTimeout(function(){
    document.getElementsByTagName('span')[2].setAttribute('class', 'mdm-layer to-arrow-bottom');
  }, 2000);
  window.setTimeout(function(){
    document.getElementsByTagName('span')[3].setAttribute('class', 'mdm-layer to-arrow-left');
  }, 2500);
  window.setTimeout(function(){
    document.getElementsByTagName('span')[3].setAttribute('class', 'mdm-layer from-arrow-left');
  }, 3500);
  window.setTimeout(function(){
    document.getElementsByTagName('span')[2].setAttribute('class', 'mdm-layer from-arrow-bottom');
  }, 4000);
  window.setTimeout(function(){
    document.getElementsByTagName('span')[1].setAttribute('class', 'mdm-layer from-arrow-right');
  }, 4500);
  window.setTimeout(function(){
    document.getElementsByTagName('span')[0].setAttribute('class', 'mdm-layer from-arrow-top');
  }, 5000);
})();
