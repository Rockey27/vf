img="";
status="";
objects = [];

function preload(){
    img=loadImage('dog_cat.jpg');

}

function setup() {
canvas=createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoded);
document.getElementById("status").innerHTML = "status : Deteting Objects";
}
function modelLoded(){
    console.log("modelLoaded!")
    status = true;
    objectDetector.detect(img, gotResult);
    
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
image(img,0,0,640,420);

if (status !="")
{
    for(i =0;i<objects.lenght;i++)
    {
        document.getElementById("status").innerHTML="status:object detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence*100);
        text(objects[i].lable+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}

}


