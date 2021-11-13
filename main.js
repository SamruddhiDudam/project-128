song1 = "";
song2 = "";
left_wrist_x =  0;
left_wrist_y =  0;
right_wrist_x = 0;
right_wrist_y = 0;

function loadSound() {

}

function preload() {
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}



function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
   
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Intitialized');
}



function draw() {
    image(video, 0, 0, 600, 500);
    fill("#000000");
    circle(left_wrist_x, left_wrist_y, 10);
}

function gotPoses(results) {
    if(results.length > 0)
    {
     console.log(results);
     left_wrist_x = results[0].pose.left_wrist.x;
     left_wristy = results[0].pose.left_wrist.y;
     console.log("left_wristx =" + left_wristx +"left_wrist_y =" + leftWrist_y);

     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("right_wrist_x ="+ right_wrist_x +"right_wrist_y =" + right_wrist_y);
    }
}