document.addEventListener('DOMContentLoaded', function() {
  var gmail = ['hottestseason', '@', 'gmail.com'].join('');
  document.querySelector("#gmail").innerHTML = '<a href="mailto:' + gmail + '">' + gmail + '</a>';
});
