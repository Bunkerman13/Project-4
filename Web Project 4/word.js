let words = ["Languid", "Ethereal", "Tawdry", "Zephyr", "Craven", "Vivacious", "Ossify", "Capricious", "Abhorrent", "Ubiquitous"];
let divs = [];

for (let index = 0; index < 10; index++) 
{
    let main = document.querySelector("main");
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let a = document.createElement("a");
    a.href = "https://people.rit.edu/ejp4604/igme230/Project4/Web%20Project%204/definition.html?"+words[index];
    div.id = index+1;
    h1.innerHTML = words[index];
    a.appendChild(h1);
    div.appendChild(a);
    main.appendChild(div);
    divs[index] = div;
}

let x = document.querySelector("main").clientWidth;
let y = document.querySelector("main").clientHeight;

for (let index = 0; index < 5; index++) {
    divs[index].style.paddingLeft = 110+"px";
    let rate = Math.random()*10000;
    if(rate < 4000){
        rate = 4000;
    }
    console.log(rate);
    anime({
        targets: divs[index],
        translateY:[{value: y - document.querySelector("div").clientHeight - 20, duration: rate}, {value: 0, duration: rate}],
        easing: "easeInCubic",
        loop: true,
    });
}



for (let index = 5; index < 10; index++){
    divs[index].style.clear = "both";
    divs[index].style.paddingTop = 90+"px";
    let rate = Math.random()*10000;
    if(rate < 4000){
        rate = 4000;
    }
    console.log(rate);
    anime({
        targets: divs[index],
        translateX:[{value: x - document.querySelector("div").clientWidth/2 - 30, duration: rate}, {value: 0, duration: rate}],
        easing: "easeInCubic",
        loop: true,
    });
}
