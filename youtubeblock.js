sleep(1000);

var suggestions = document.getElementsByClassName('style-scope ytd-watch-next-secondary-results-renderer');
var startpage = document.getElementsByClassName('style-scope ytd-page-manager');
var recommended = document.getElementById('title');

if (recommended.textContent === 'Recommended') {
  for (var i = 0; i < startpage.length; i++) {
    startpage[i].style.display = "none";
  }
  var cgtn_link = document.createElement('cgtn');
  var link_text = document.createTextNode('CLICK TO WATCH CGTN LIVE');
  cgtn_link.appendChild(link_text);
  cgtn_link.title = "CGTN LIVESTREAM LINK";
  cgtn_link.href = 'https://www.youtube.com/watch?v=ofUtSOORUmk';
  cgtn_link.style.display = 'block';
  document.body.appendChild(cgtn_link);
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