let term = window.location.href.slice(window.location.href.indexOf('?')+1);

let pElements = document.querySelectorAll("p");

let def = "";

let h3 = document.querySelector("h3");
h3.style.display = "none"
let a = document.createElement("a");
function check(val)
{
    if(term == pElements[val].id)
    {
        pElements[val].style.color = "green";
        def = pElements[val].innerHTML;

        a.innerHTML = "Continue";
        a.href = "https://people.rit.edu/ejp4604/igme230/Project4/Web%20Project%204/display.html?"+term+"/"+def;
        h3.appendChild(a);
        h3.style.display = "block"
    }
    else
    {
        pElements[val].style.color = "red";
    }
}


for (let index = 0; index < 10; index++) {
    let num = Math.random();
    if(num > .75){
        num = .75;
    }
    num = num * 100;
    pElements[index].style.marginLeft = num+"%";
    pElements[index].style.marginTop = 30+"px";
}





  
  let followCursor = (function() {
    let magGlass = document.querySelector('img');
    magGlass.style.position = 'absolute';
  
    return {
      init: function() {
        document.body.appendChild(magGlass);
      },
  
      run: function(e) {
        var e = e || window.event;
        magGlass.style.left  = (e.clientX + 5) + 'px';
        magGlass.style.top = (e.clientY + 5) + 'px';
        
      }
    };
  }());
  
  
  followCursor.init();
  document.body.onmousemove = followCursor.run;
  

