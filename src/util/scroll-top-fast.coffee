# http://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery
module.exports = ()  ->
  #$('html, body').animate {scrollTop: 0}, 'fast'
  window.scrollTo 0,0
