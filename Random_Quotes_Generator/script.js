const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else { 
      document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);






function loadJSON(callback) {

 var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'quotes.json', true);
  xobj.onreadystatechange = function() {
  if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

loadJSON(function(response) {
    jsonresponse= JSON.parse(response);
    quotes=jsonresponse;
});




const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].text;
    author.innerHTML ="~ "+quotes[random].author;
 })


const answer = document.getElementById("copyResult");
const copy   = document.getElementById("save-btn");
const divid   = document.getElementById("quote-body");
const selection = window.getSelection();
const range = document.createRange();

const copyquote = document.getElementById("mainquote")
const copyauthor = document.getElementById("quoteauthor")

copy.addEventListener('click', function(e) {

    range.selectNodeContents(divid);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = ' Copied ! ';
      quoteBtn.addEventListener('click', () => {
      answer.innerHTML=""


      })
    } else {
      answer.innerHTML = ' Unable to copy! ';  
    }
    window.getSelection().removeAllRanges()
});
