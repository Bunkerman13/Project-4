let termDef = window.location.href.slice(window.location.href.indexOf('?')+1);
let def1 = termDef.slice(termDef.indexOf('/')+1);
let defEdit = def1.split("%20");
let def = "";
for (let index = 0; index < defEdit.length; index++) {
    def += defEdit[index]+" "
    
}

let term = termDef.slice(0, termDef.indexOf('/'));



document.querySelector("h1").innerHTML = term;
document.querySelector("h2").innerHTML = def;



let background = {
"Languid":"From Latin languidus (“faint, weak, dull, sluggish, languid”).",
"Ethereal":"Latin aetherius (“of or pertaining to the ether, the sky, or the air or upper air; ethereal”), from Ancient Greek αἰθέριος (aithérios, “of or pertaining to the upper air; ethereal”).", 
"Tawdry":"Shortened from tawdry lace; originally a corruption of Saint Audrey lace (from Old English Æþelþryþ). The lace necklaces sold to pilgrims to Saint Audrey fell out of fashion in the 17th century, and so tawdry was reinterpreted as meaning cheap or vulgar.", 
"Zephyr":"From Ancient Greek Ζέφυρος (Zéphuros)", 
"Craven":"From Middle English craven (adjective)", 
"Vivacious":"Borrowing from Latin vīvāx (“lively, vigorous”) (with the suffix -ious), from vīvere (“to live”).", 
"Ossify":"From Latin os, ossis (“bone”) +‎ -ify.", 
"Capricious":"Borrowed from French capricieux, from Italian capriccioso, from capriccio.", 
"Abhorrent":"From Latin abhorrēns, present active participle of abhorreō (“abhor”). See abhor", 
"Ubiquitous":"From Latin ubique (“everywhere”), from ubi (“where”)."
};

document.querySelector("h3").innerHTML = background[term];



let giphyTerm = {"Languid":"Relax","Ethereal":"Ethereal", "Tawdry":"Cheap", "Zephyr":"Breeze", "Craven":"Cowardly", "Vivacious":"Vivacious", "Ossify":"Bone", "Capricious":"Fickle", "Abhorrent":"Disgust", "Ubiquitous":"Brands"};




function getData() {
    const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?";
    const GIPHY_KEY = "zikZNEhehmvYTuvyUdmq1TP7g3BqxyLc";
    let url = GIPHY_URL+"api_key="+GIPHY_KEY;


    let gTerm = encodeURIComponent(giphyTerm[term]);
    if(gTerm.length <1) return;
    url = url + "&q=" + gTerm;
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
      

            document.querySelector("#p"+(x+1)).innerHTML = line;

            
        }

        
        
    }
}

//3 set up event handler for button click to call function
 getData();

 
 term = term.toLowerCase();
 let audio = document.querySelector("audio");
 audio.src = "https://s.yimg.com/tn/dict/ox/mp3/v1/"+term+"@_us_1.mp3";

 function lidUp(){
    anime({
        targets: document.getElementById("lid_top"),
        translateY:{value: -50, duration: 2000},
        easing:"easeInOutQuart"
    
     });
 } 

 function lidDown(){
    anime({
        targets: document.getElementById("lid_top"),
        translateY:{value: 0, duration: 1000},
        easing:"easeInOutQuart"
        
    
     });
 } 