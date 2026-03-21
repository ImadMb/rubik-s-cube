// Definition of faces
let frontFace   = ["#f6ff00", "#f6ff00", "#f6ff00", "#f6ff00", "#f6ff00", "#f6ff00", "#f6ff00", "#f6ff00", "#f6ff00"];
let topFace     = ["red", "red", "red", "red", "red", "red", "red", "red", "red"];
let bottomFace  = ["#ff5100", "#ff5100", "#ff5100", "#ff5100", "#ff5100", "#ff5100", "#ff5100", "#ff5100", "#ff5100"];        
let rightFace   = ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"];          
let leftFace    = ["green", "green", "green", "green", "green", "green", "green", "green", "green"];
let backFace    = ["white", "white", "white", "white", "white", "white", "white", "white", "white"]

// Definition of all cube elements
let elementOne      = document.querySelector(".e-7");
let elementTwo      = document.querySelector(".e-8");
let elementThree    = document.querySelector(".e-9");
let elementFour     = document.querySelector(".e-12");
let elementFive     = document.querySelector(".e-13");
let elementSix      = document.querySelector(".e-14");
let elementSeven    = document.querySelector(".e-17");
let elementEight    = document.querySelector(".e-18");
let elementNine     = document.querySelector(".e-19");

// definition of top, bottom, left and right face visible elements
let topOne          = document.querySelector(".e-2");
let topTwo          = document.querySelector(".e-3");
let topThree        = document.querySelector(".e-4");
let topElements     = [topOne, topTwo, topThree];

let bottomOne       = document.querySelector(".e-22");
let bottomTwo       = document.querySelector(".e-23");
let bottomThree     = document.querySelector(".e-24");
let bottomElements  = [bottomOne, bottomTwo, bottomThree];

let leftOne          = document.querySelector(".e-6");
let leftTwo          = document.querySelector(".e-11");
let leftThree        = document.querySelector(".e-16");
let leftElements     = [leftOne, leftTwo, leftThree];

let rightOne         = document.querySelector(".e-10");
let rightTwo         = document.querySelector(".e-15");
let rightThree       = document.querySelector(".e-20");
let rightElements    = [rightOne, rightTwo, rightThree];

let cubeElements     = [elementOne, elementTwo, elementThree,
                        elementFour, elementFive, elementSix,
                        elementSeven, elementEight, elementNine];


// functions to visually update the cube  
function colorFrontFace() {
    let counter = 0;
    cubeElements.forEach(e => {
        e.style.backgroundColor = frontFace[counter];
        counter++;
    });
}

function colorTopElements() {
    let counter = 6;
    topElements.forEach(e => {
        e.style.backgroundColor = topFace[counter];
        counter++;
    });
}

function colorBottomElements() {
    let counter = 0;
    bottomElements.forEach(e => {
        e.style.backgroundColor = bottomFace[counter];
        counter++;
    });
}

function colorRightElements() {
    let counter = 0;
    rightElements.forEach(e => {
        e.style.backgroundColor = rightFace[counter*3];
        counter++;
    });
}

function colorLeftElements() {
    let counter = 1;
    leftElements.forEach(e => {
        e.style.backgroundColor = leftFace[counter*3-1];
        counter++;
    });
}

function colorAndUpdateCube() {
    colorFrontFace();
    colorTopElements();
    colorBottomElements();
    colorRightElements();
    colorLeftElements();
}

colorAndUpdateCube();

// move the first column up
topOne.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter*3], bottomFace[counter*3], backFace[counter*3], topFace[counter*3]] = [bottomFace[counter*3], backFace[counter*3], topFace[counter*3], frontFace[counter*3]]
    }
    colorAndUpdateCube();
})

// move the second column up
topTwo.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter*3+1], bottomFace[counter*3+1], backFace[counter*3+1], topFace[counter*3+1]] = [bottomFace[counter*3+1], backFace[counter*3+1], topFace[counter*3+1], frontFace[counter*3+1]]
    }
    colorAndUpdateCube();
})

// move the third column up
topThree.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter*3+2], bottomFace[counter*3+2], backFace[counter*3+2], topFace[counter*3+2]] = [bottomFace[counter*3+2], backFace[counter*3+2], topFace[counter*3+2], frontFace[counter*3+2]]
    }
    colorAndUpdateCube(); 
})



// move the first column down
bottomOne.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter*3], bottomFace[counter*3], backFace[counter*3], topFace[counter*3]] = 
        [topFace[counter*3], frontFace[counter*3], bottomFace[counter*3], backFace[counter*3]]
    }
    colorAndUpdateCube();
})

// move the second column down
bottomTwo.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter*3+1], bottomFace[counter*3+1], backFace[counter*3+1], topFace[counter*3+1]] = 
        [topFace[counter*3+1], frontFace[counter*3+1], bottomFace[counter*3+1], backFace[counter*3+1]]
    }
    colorAndUpdateCube();
})

// move the third column down
bottomThree.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter*3+2], bottomFace[counter*3+2], backFace[counter*3+2], topFace[counter*3+2]] = 
        [topFace[counter*3+2], frontFace[counter*3+2], bottomFace[counter*3+2], backFace[counter*3+2]]
    }
    colorAndUpdateCube(); 
})


// move the first row left
leftOne.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter], rightFace[counter], backFace[counter], leftFace[counter]] = 
        [rightFace[counter], backFace[counter], leftFace[counter], frontFace[counter]]
    }
    colorAndUpdateCube();
})

// move the second row left
leftTwo.addEventListener('click', () => {
    for(let counter = 3; counter < 6; counter++){
        [frontFace[counter], rightFace[counter], backFace[counter], leftFace[counter]] = 
        [rightFace[counter], backFace[counter], leftFace[counter], frontFace[counter]]
    }
    colorAndUpdateCube();
})

// move the third row left
leftThree.addEventListener('click', () => {
    for(let counter = 6; counter < 9; counter++){
        [frontFace[counter], rightFace[counter], backFace[counter], leftFace[counter]] = 
        [rightFace[counter], backFace[counter], leftFace[counter], frontFace[counter]]
    }
    colorAndUpdateCube();
})


// move the first row right
rightOne.addEventListener('click', () => {
    for(let counter = 0; counter < 3; counter++){
        [frontFace[counter], rightFace[counter], backFace[counter], leftFace[counter]] = 
        [leftFace[counter], frontFace[counter], rightFace[counter], backFace[counter]]
    }
    colorAndUpdateCube();
})

// move the second row right
rightTwo.addEventListener('click', () => {
    for(let counter = 3; counter < 6; counter++){
        [frontFace[counter], rightFace[counter], backFace[counter], leftFace[counter]] = 
        [leftFace[counter], frontFace[counter], rightFace[counter], backFace[counter]]
    }
    colorAndUpdateCube();
})

// move the third row right
rightThree.addEventListener('click', () => {
    for(let counter = 6; counter < 9; counter++){
        [frontFace[counter], rightFace[counter], backFace[counter], leftFace[counter]] = 
        [leftFace[counter], frontFace[counter], rightFace[counter], backFace[counter]]
    }
    colorAndUpdateCube();
})

function rotateCubeUp() {
    [frontFace, bottomFace, backFace, topFace] = 
    [bottomFace, backFace, topFace, frontFace];
    colorAndUpdateCube();
}

function rotateCubeDown() {
    [frontFace, bottomFace, backFace, topFace] = 
    [topFace, frontFace, bottomFace, backFace];
    colorAndUpdateCube();
}

function rotateCubeLeft() {
    [frontFace, leftFace, backFace, rightFace] = 
    [leftFace, backFace, rightFace, frontFace];
    colorAndUpdateCube();
}

function rotateCubeRight() {
    [frontFace, leftFace, backFace, rightFace] = 
    [rightFace, frontFace, leftFace, backFace];
    colorAndUpdateCube();
}

