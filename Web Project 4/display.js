let termDef = window.location.href.slice(window.location.href.indexOf('?')+1);
let def = termDef.slice(termDef.indexOf('/')+1);
let term = termDef.slice(0, termDef.indexOf('/'));

document.querySelector("h1").innerHTML = term;
document.querySelector("h2").innerHTML = def;



let background = {"Hello":"A", "We":"B", "Are":"C", "Doing":"D", "This":"E", "Time":"F", "To":"G", "Go":"H", "Do":"I", "This":"J"}

function getData() {
    const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?";
    const GIPHY_KEY = "zikZNEhehmvYTuvyUdmq1TP7g3BqxyLc";
    let url = GIPHY_URL+"api_key="+GIPHY_KEY;


    term = encodeURIComponent(term);
    if(term.length <1) return;
    url = url + "&q=" + term;
    let limit = 3;
    url = url + "&limit=" + limit;

    
    $.ajax({
        dataType: "json", url: url, data: null, success: jsonLoaded  // the callback function
    })

    function jsonLoaded(obj){
        
       

        // if there is an array of results, loop through them, and create new elements in the HTML to display each of them
        let results = obj.data;
        let bigString = "";

        for(let x=0; x < results.length; x++){
            let result = results[x];
            let smallURL = result.images.fixed_width_small.url;
            let url = result.url;
            if(!smallURL){smallURL = "images/no-image-found.png";}

            // ES6 templating
            var line = `<div class='result' style='float: left'><a target='_blank' href='${url}'><img src='${smallURL}' title='${result.id}' /></a></div>`;
            //line += `<br />View on Giphy</a></div>`;

            bigString += line;
        }

        document.querySelector("#content").innerHTML = bigString;
    }
}

//3 set up event handler for button click to call function
 getData();