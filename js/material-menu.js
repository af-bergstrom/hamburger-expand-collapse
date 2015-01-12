$(function(){
  var button;
  button = $('.mdm-icon');
  button.on('click', function(){
    var layer;
    layer = $('.mdm-layer', this);
    if (layer.hasClass('__expanded')) {
      layer.removeClass('__expanded').addClass('__collapsed');
    }
    else {
      layer.addClass('__expanded').removeClass('__collapsed');
    }
  });
});

// (function () {
//     'use strict';
//     [].forEach.call(document.getElementsByClassName('mdm-icon'), function(entry) {
//         entry.addEventListener('click', function() {
//             var child;
//             child = this.childNodes[1].classList;



//             // var dataDirection = this.childNodes[1].getAttribute('data-attr');
//             // switch (dataDirection) {
//             //     case 'left':
//             //         if (child.contains('to-arrow-left')) {
//             //             child.remove('to-arrow-left');
//             //             child.add('from-arrow-left');
//             //         } else {
//             //             child.remove('from-arrow-left');
//             //             child.add('to-arrow-left');
//             //         }
//             //         break;
//             //     case 'right':
//             //         if (child.contains('to-arrow-right')) {
//             //             child.remove('to-arrow-right');
//             //             child.add('from-arrow-right');
//             //         } else {
//             //             child.remove('from-arrow-right');
//             //             child.add('to-arrow-right');
//             //         }
//             //         break;
//             //     case 'top':
//             //         if (child.contains('to-arrow-top')) {
//             //             child.remove('to-arrow-top');
//             //             child.add('from-arrow-top');
//             //         } else {
//             //             child.remove('from-arrow-top');
//             //             child.add('to-arrow-top');
//             //         }
//             //         break;
//             //     case 'bottom':
//             //         if (child.contains('to-arrow-bottom')) {
//             //             child.remove('to-arrow-bottom');
//             //             child.add('from-arrow-bottom');
//             //         } else {
//             //             child.remove('from-arrow-bottom');
//             //             child.add('to-arrow-bottom');
//             //         }
//             //         break;
//             // }
//         });
//     });
// })();
