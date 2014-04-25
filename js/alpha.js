

$(document).ready(function() {

      // nav bar menu 
      $('.collapse').on('shown.bs.collapse', function (e) {
        $('.collapse').not(this).removeClass('in');
      });

      $('[data-toggle=collapse]').click(function (e) {

          //console.log(this);
          console.log($(this).data('target') );

        $('[data-toggle=collapse]').parent('li').removeClass('active');
        $(this).parent('li').toggleClass('active');
      });



});