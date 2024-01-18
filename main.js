nosex=0;
nosey=0;
function preload(){
    guardarimagen=loadImage('https://i.postimg.cc/Mp5HC7Tw/klipartz-com.png');
}
function setup(){
    canvas=createCanvas(450,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes);
    
    
}
function modelloaded(){
    console.log("modelo activado");
}
function gotposes(results){
    
    if(results.length>0){
        console.log("posicion nariz en x"+results[0].pose.nose.x);
        console.log("posicion nariz en y"+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-50;
        nosey=results[0].pose.nose.y-200;

    }
}
function draw(){
    image(video, 0,0,450,300);
    image(guardarimagen, nosex,nosey,100,110);
}