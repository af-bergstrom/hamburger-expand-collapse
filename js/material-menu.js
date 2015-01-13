(function () {
    'use strict';
    [].forEach.call(document.getElementsByClassName('mdm-icon'), function(entry) {
        entry.addEventListener('click', function() {
            var children;
            children = [].forEach.call(this.getElementsByClassName('mdm-layer'), function(c) {
              if (c.classList.contains('__expanded')) {
                removeClass(c, '__expanded');
                addClass(c, '__collapsed');
              } else {
                addClass(c, '__expanded');
                removeClass(c, '__collapsed');
              }
            });
        });
    });
    // Functions
    function hasClass(ele,cls) {
      return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }

    function addClass(ele,cls) {
      if (!hasClass(ele,cls)) ele.className += " "+cls;
    }

    function removeClass(ele,cls) {
      if (hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
      }
    }
})();
