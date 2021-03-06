/* globals $ */
var handleFocus = function() {
  // If state on input is 'focus', add class to a-input: 'a-input-focus'
  $('input.form-control').focus(function() {
    $(this).parent().addClass('a-input-focus');
  }).blur(function() {
    $(this).parent().removeClass('a-input-focus');
  });

  $('.a-radioButtons-stackedList').find('input[type=radio]').change(function() {
    var me = $(this);
    if (me.is(':checked')) {
      me.parent().addClass('a-js-radioParentGray');
      $('input[type=radio]').each(function() {
        if ($(this).attr('id') !== me.attr('id') && $(this).attr('name') === me.attr('name')) {
          $(this).parent().removeClass('a-js-radioParentGray');
        }
      });
    }
  });

  // Prevent focus state styling on click
  $('body').on('mousedown', '*:not(input):not(textarea)', function() {
    // Accomodate for popovers
    if ($(this).attr('data-toggle') !== 'popover' && !$(this).is('i')) {
      $(this).addClass('override-focus');
      setTimeout(function() {
        this.blur(); this.removeClass('override-focus');
      }.bind($(this)), 1500);
    }

    $(this).children('.custom-control-indicator').addClass('override-focus');

    setTimeout(function() {
      this.children('.custom-control-indicator').prev().blur();
      this.children('.custom-control-indicator').removeClass('override-focus');
    }.bind($(this)), 1500);

    $(this).children('.a-switch-label').addClass('override-focus');

    setTimeout(function() {
      this.children('.a-switch-label').prev().blur();
      this.children('.a-switch-label').removeClass('override-focus');
    }.bind($(this)), 1500);
  });
};
