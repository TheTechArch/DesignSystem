/* globals $ */
var handleFocus = function () {
  // If state on input is 'focus', add class to a-input: 'a-input-focus'
  $('input.form-control').focus(function () {
    $(this).parent().addClass('a-input-focus')
  }).blur(function () { $(this).parent().removeClass('a-input-focus') })
  // Prevent focus state styling on click
  $('body').on('mousedown', '*', function () {
    $(this).addClass('override-focus')
    setTimeout(function () {
      this.blur(); this.removeClass('override-focus')
    }.bind($(this)), 1500)
    $(this).children('.c-indicator').addClass('override-focus')
    setTimeout(function () {
      this.children('.c-indicator').prev().blur()
      this.children('.c-indicator').removeClass('override-focus')
    }.bind($(this)), 1500)
    $(this).children('.a-switch-label').addClass('override-focus')
    setTimeout(function () {
      this.children('.a-switch-label').prev().blur()
      this.children('.a-switch-label').removeClass('override-focus')
    }.bind($(this)), 1500)
  })
}
