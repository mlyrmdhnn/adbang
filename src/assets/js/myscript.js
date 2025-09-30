/* eslint-disable no-undef */
$.fn.pauseInput = function () {
  $('input').attr('disabled', 'disabled')
  $('textarea').attr('disabled', 'disabled')
  $('option').attr('disabled', 'disabled')
  $('button').attr('disabled', 'disabled')
}

$.fn.playInput = function () {
  $('input').removeAttr('disabled')
  $('textarea').removeAttr('disabled')
  $('option').removeAttr('disabled')
  $('button').removeAttr('disabled')
}
