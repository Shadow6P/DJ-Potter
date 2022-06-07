deson = "";
function preload() {
    deson = loadSound("music.mp3");
}
muñecaizquierdax = 0;
muñecaizquierday = 0;
muñecaderechax = 0;
muñecaderechay = 0;
scoreizquierda = 0;
scorederecha = 0;



function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelocargado);
    posenet.on('pose', posichion);
}

function draw() {
    image(video, 0, 0, 500, 500);
    fill("#D8A815");
    if (scorederecha > 0.2) {
        circle(muñecaderechax, muñecaderechay, 20);
        if (muñecaderechay > 0 && muñecaderechay < 100) {
            document.getElementById("speed").innerHTML = "Speed = 2.5x";
            deson.rate(2.5);
        }
        if (muñecaderechay > 100 && muñecaderechay < 200) {
            document.getElementById("speed").innerHTML = "Speed = 2x";
            deson.rate(2);
        }
        if (muñecaderechay > 200 && muñecaderechay < 300) {
            document.getElementById("speed").innerHTML = "Speed = 1.5x";
            deson.rate(1.5);
        }
        if (muñecaderechay > 300 && muñecaderechay < 400) {
            document.getElementById("speed").innerHTML = "Speed = 1x";
            deson.rate(1);
        }
        if (muñecaderechay > 400 && muñecaderechay < 500) {
            document.getElementById("speed").innerHTML = "Speed = 0.5x";
            deson.rate(0.5);
        }
    }
    if (scoreizquierda > 0.2) {
        circle(muñecaizquierdax, muñecaizquierday, 20);
        if (muñecaizquierday > 0 && muñecaizquierday < 100) {
            document.getElementById("volume").innerHTML = "Volume = 1";
            deson.setVolume(1);
        }
        if (muñecaizquierday > 100 && muñecaizquierday < 200) {
            document.getElementById("volume").innerHTML = "Volume = 0.8";
            deson.setVolume(0.8);
        }
        if (muñecaizquierday > 200 && muñecaizquierday < 300) {
            document.getElementById("volume").innerHTML = "Volume = 0.6";
            deson.setVolume(0.6);
        }
        if (muñecaizquierday > 300 && muñecaizquierday < 400) {
            document.getElementById("volume").innerHTML = "Volume = 0.4";
            deson.setVolume(0.4);
        }
        if (muñecaizquierday > 400 && muñecaizquierday < 500) {
            document.getElementById("volume").innerHTML = "Volume = 0.2";
            deson.setVolume(0.2);
        }
    }
}


function play() {
    deson.play();
    deson.setVolume(0.3);
    deson.rate(1.5);
}

function modelocargado() {
    console.log('mamaguevo...digo glu glu glu');
}

function posichion(resultadeishons) {
    if (resultadeishons.length > 0) {
        muñecaizquierdax = resultadeishons[0].pose.leftWrist.x;
        muñecaizquierday = resultadeishons[0].pose.leftWrist.y;
        muñecaderechax = resultadeishons[0].pose.rightWrist.x;
        muñecaderechay = resultadeishons[0].pose.rightWrist.y;
        console.log(muñecaderechax)
        scorederecha = resultadeishons[0].pose.keypoints[10].score;
        scoreizquierda = resultadeishons[0].pose.keypoints[9].score;
    }
}