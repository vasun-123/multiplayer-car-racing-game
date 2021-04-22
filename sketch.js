var hypnoticball, database;
var position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
    var hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function writePosition(x,y){
    //updating
    database.ref('ball/position').set({
        'x': position.x + x ,
        'y': position.y + y 
        })
}
function readPosition(data){
    position = data.val();
    hypnoticball.x = position.x;
    hypnoticball.y = position.y;
}
function showError(){ 
    console.log("Error in writing to the database");
 }
