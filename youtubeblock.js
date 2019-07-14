// sleep(2000);

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
  // var cgtn_link = document.createElement('cgtn');
  // var link_text = document.createTextNode('CLICK TO WATCH CGTN LIVE');
  // cgtn_link.appendChild(link_text);
  // cgtn_link.title = "CGTN LIVESTREAM LINK";
  // cgtn_link.href = 'https://www.youtube.com/watch?v=ofUtSOORUmk';
  // cgtn_link.style.display = 'block';
  // document.body.appendChild(cgtn_link);
  //startpage[0].parentNode.insertBefore(cgtn_link, startpage[0].nextSibling);
}

for (var i = 0; i < suggestions.length; i++) {
  suggestions[i].style.display = "none";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// waiting_time = sleep(2000);
// waiting_time.then(function(){
//     console.log(url.match(subreddit));
//     console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhh')
// });