let frontFace   = ["yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow", "yellow"];
let topFace     = ["red", "red", "red", "red", "red", "red", "red", "red", "red"];
let bottomFace  = ["orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange", "orange"];        
let rightFace   = ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"];          
let leftFace    = ["green", "green", "green", "green", "green", "green", "green", "green", "green"];
let backFace    = ["white", "white", "white", "white", "white", "white", "white", "white", "white"]


let elementOne      = document.querySelector(".e-7");
let elementTwo      = document.querySelector(".e-8");
let elementThree    = document.querySelector(".e-9");

let elementFour     = document.querySelector(".e-12");
let elementFive     = document.querySelector(".e-13");
let elementSix      = document.querySelector(".e-14");

let elementSeven    = document.querySelector(".e-17");
let elementEight    = document.querySelector(".e-18");
let elementNine     = document.querySelector(".e-19");

let topOne          = document.querySelector(".e-1");
let topTwo          = document.querySelector(".e-2");
let topThree        = document.querySelector(".e-2");

let bottomOne       = document.querySelector(".e-22");
let bottomTwo       = document.querySelector(".e-23");
let bottomThree     = document.querySelector(".e-24");

let leftOne          = document.querySelector(".e-6");
let leftTwo          = document.querySelector(".e-11");
let leftThree        = document.querySelector(".e-16");

let rightOne          = document.querySelector(".e-10");
let rightTwo          = document.querySelector(".e-15");
let rightThree        = document.querySelector(".e-20");

let cubeElements = [elementOne, elementTwo, elementThree,
                    elementFour, elementFive, elementSix,
                    elementSeven, elementEight, elementNine];
                    
function colorFaces() {
    let counter = 0;
    cubeElements.forEach(e => {
        e.style.backgroundColor = backFace[counter];
        counter++;
    })
}


colorFaces();