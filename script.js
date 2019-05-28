let doorImage1= document.getElementById('door1');
let doorImage2= document.getElementById('door2');
let doorImage3= document.getElementById('door3');
var numClosedDoors=3;

let botDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

var openDoor1;
var openDoor2;
var openDoor3;



let randomChoreDoorGenerator = () =>{
  let choreDoor= Math.floor(Math.random()*2)
  if(choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  }
  if(choreDoor===1){
    openDoor1=beachDoorPath;
    openDoor2=botDoorPath;
    openDoor3=spaceDoorPath;
  }
  if(choreDoor===2){
    openDoor1=beachDoorPath;
    openDoor2=spaceDoorPath;
    openDoor3=botDoorPath;
  }
}


randomChoreDoorGenerator();


function onclick1(){
	doorImage1.src=openDoor1;
}
doorImage1.onclick=onclick1;

function onclick2(){
	doorImage2.src=openDoor2;
}
doorImage2.onclick=onclick2;

function onclick3(){
	doorImage3.src=openDoor3;
}
doorImage3.onclick=onclick3;

function playDoor(){
  
}


  





  
