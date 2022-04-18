song = "";
song1 = "";

function preload(){
    song = loadSound("bella-ciao.mp3");
    song1 = loadSound("believer.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}