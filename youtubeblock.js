var suggestions = document.getElementsByClassName('style-scope ytd-watch-next-secondary-results-renderer');
var startpage = document.getElementsByClassName('style-scope ytd-page-manager');
var startpage2 = document.getElementsByClassName('style-scope ytd-browse');
var startpage3 = document.getElementsByClassName('style-scope ytd-two-column-browse-results-renderer');
var recommended = document.getElementById('title');

if (recommended.textContent === 'Recommended' || recommended.textContent === 'Today') {
  for (var i = 0; i < startpage.length; i++) {
    startpage[i].style.display = "none";
  }
  startpage.remove();
  for (var i = 0; i < startpage2.length; i++) {
    startpage2[i].style.display = "none";
  }
  startpage2.remove();
  for (var i = 0; i < startpage3.length; i++) {
    startpage3[i].style.display = "none";
  }
  startpage3.remove();
}

for (var i = 0; i < suggestions.length; i++) {
  suggestions[i].style.display = "none";
}