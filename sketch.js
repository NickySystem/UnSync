//Declarations
let chPitches = ['C3','D3','Eb3','F3','G3','Ab3','A#3', 'C4'];
let slider0;
let slider1;
let slider2;
let slider3;
let slider4;
let slider5;
let slider6;
let slider7;
let bumper0;
let bumper1;
let bumper2;
let bumper3;
let bumper4;
let bumper5;
let bumper6;
let bumper7;
let outputz;

var state = true;
var textBSize = 23;
var note = "_";
var globalSpeed = 1;
var dispSpeed = 10;
var ctrlMove = 77;

function setup() {
 	
  //Setting up MIDI
  WebMidi.enable(function (err) { //check if WebMidi.js is enabled

  if (err) {
      console.log("WebMidi could not be enabled.", err);
    } else {
      console.log("WebMidi enabled!");
    }

    
  //name our visible MIDI output ports
  console.log("---");
  console.log("Output Ports: ");
  for(i = 0; i< WebMidi.outputs.length; i++){
  		console.log(i + ": " + WebMidi.outputs[i].name);
    }  
    //end of MIDI setup
    
    
    for(i = 0; i< WebMidi.outputs.length; i++){
  		outputz = (WebMidi.outputs[i].name);
    }
  });
	 
  
  //channel pitch textboxes
  c0Pitch = createInput(chPitches[0]);
  c0Pitch.position(86, 360);
  c0Pitch.size(textBSize);
  c1Pitch = createInput(chPitches[1])
  c1Pitch.position(186, 360);
  c1Pitch.size(textBSize);
  c2Pitch = createInput(chPitches[2])
  c2Pitch.position(286, 360);
  c2Pitch.size(textBSize);
  c3Pitch = createInput(chPitches[3])
  c3Pitch.position(386, 360);
  c3Pitch.size(textBSize);
  c4Pitch = createInput(chPitches[4])
  c4Pitch.position(486, 360);
  c4Pitch.size(textBSize);
  c5Pitch = createInput(chPitches[5])
  c5Pitch.position(586, 360);
  c5Pitch.size(textBSize);
  c6Pitch = createInput(chPitches[6])
  c6Pitch.position(686, 360);
  c6Pitch.size(textBSize);
  c7Pitch = createInput(chPitches[7])
  c7Pitch.position(786, 360);
  c7Pitch.size(textBSize);
  
     
  //make the canvas to size
  createCanvas(1000, 420);
  
  //sliders & bumpers
  slider0 = new Zlider(100,200,1.5);
  slider1 = new Zlider(200,200,1.5);
  slider2 = new Zlider(300,200,1.5);
  slider3 = new Zlider(400,200,1.5);
  slider4 = new Zlider(500,200,1.5);
  slider5 = new Zlider(600,200,1.5);
  slider6 = new Zlider(700,200,1.5);
  slider7 = new Zlider(800,200,1.5);
  bumper0 = new Bumper(100,250);
  bumper1 = new Bumper(200,260);
  bumper2 = new Bumper(300,270);
  bumper3 = new Bumper(400,280);
  bumper4 = new Bumper(500,290);
  bumper5 = new Bumper(600,300);
  bumper6 = new Bumper(700,310);
  bumper7 = new Bumper(800,320);

  createButtons();  
  
}

function draw() {
  background(0,0,0);
  lineDisplay();
  bumper0.display();
  bumper1.display();
  bumper2.display();
  bumper3.display();
  bumper4.display();
  bumper5.display();
  bumper6.display();
  bumper7.display();
  slider0.display();
  slider1.display();
  slider2.display();
  slider3.display();
  slider4.display();
  slider5.display();
  slider6.display();
  slider7.display();
    
  moveSliders();
  readPitches();
  
  
  drawControl();
  speedRange();
  
  
}

function createButtons(){
  button = createButton(' ');
  button.position(94,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
button = createButton(' ');
  button.position(194,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
button = createButton(' ');
  button.position(294,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
  button = createButton(' ');
  button.position(394,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
  button = createButton(' ');
  button.position(494,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
  button = createButton(' ');
  button.position(594,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
  button = createButton(' ');
  button.position(694,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
  button = createButton(' ');
  button.position(794,385);
  button.size(10,10);
  button.style('background-color', '#FF6FFF');
  button.style('border',0);
  button.mousePressed();
}

function lineDisplay(){
  stroke(100,100,100);
  strokeWeight(0.7);
  line(100,50,100,350);
  line(200,50,200,350);
  line(300,50,300,350);
  line(400,50,400,350);
  line(500,50,500,350);
  line(600,50,600,350);
  line(700,50,700,350);
  line(800,50,800,350);
  
}

function speedRange(){
if(globalSpeed>2){globalSpeed=2;}
  if(globalSpeed<0.1){globalSpeed=0.1}
  dispSpeed = round((globalSpeed /2)*10);
}

function drawControl(){
  fill(0,0,0);
  stroke(100,100,100);
  
  strokeWeight(1);
  //rect(870,50,100,30);
  //rect(870,80,100,145);
  strokeWeight(0.5);
  stroke(180,180,180);
  line(870, 105+ctrlMove, 970, 105+ctrlMove);
  line(870, 130+ctrlMove, 970, 130+ctrlMove);
  //line(870, 180, 970, 180);
  
  noStroke();
  fill(255,255,255);
  
  textSize(18);
  text("unSync", 875, 70+ctrlMove);
  textSize(12);
  text("Note", 875, 100+ctrlMove);
  text("Speed", 875, 125+ctrlMove);
  
  text("MIDI Port:", 875, 150+ctrlMove);
  fill("#FF6FFF");
  text(note, 920, 100+ctrlMove);
  text(dispSpeed, 945, 125+ctrlMove);
  text(outputz, 875, 160+ctrlMove, 120, 150)
  
  fill(200,200,200);
  text("-", 920, 125+ctrlMove);
  text("+", 930, 125+ctrlMove);  
}

function readPitches(){
  chPitches.splice(0,1,c0Pitch.value());
  chPitches.splice(1,1,c1Pitch.value());
  chPitches.splice(2,1,c2Pitch.value());
  chPitches.splice(3,1,c3Pitch.value());
  chPitches.splice(4,1,c4Pitch.value());
  chPitches.splice(5,1,c5Pitch.value());
  chPitches.splice(6,1,c6Pitch.value());
  chPitches.splice(7,1,c7Pitch.value());
}


function moveSliders(){
  //Move sliders
  slider0.y = slider0.y+slider0.speed;
    
  //Collision check
  if (slider0.speed > 0 & slider0.y > bumper0.y) { 
    WebMidi.outputs[0].playNote(chPitches[0]);  
    note = chPitches[0];
    slider0.speed=globalSpeed*-1; 
    }
  if (slider0.y<50) { 
      slider0.speed=globalSpeed; 
    } 
  
    
  slider1.y = slider1.y+slider1.speed;
    if (slider1.speed > 0 & slider1.y > bumper1.y) { 
      WebMidi.outputs[0].playNote(chPitches[1]);
      note = chPitches[1];
      slider1.speed=globalSpeed*-1; 
      } 
    if (slider1.y<=50) { 
      slider1.speed=globalSpeed; 
      } 
  
    slider2.y = slider2.y+slider2.speed;
    if (slider2.speed > 0 & slider2.y > bumper2.y) { 
      WebMidi.outputs[0].playNote(chPitches[2]);
      note = chPitches[2];
      slider2.speed=globalSpeed*-1; 
      } 
    if (slider2.y<=50) { 
      slider2.speed=globalSpeed; 
      } 
  
    slider3.y = slider3.y+slider3.speed;
    if (slider3.speed > 0 & slider3.y > bumper3.y) { 
      WebMidi.outputs[0].playNote(chPitches[3]);
      note = chPitches[3];
      slider3.speed=globalSpeed*-1; 
      } 
    if (slider3.y<=50) { 
      slider3.speed=globalSpeed; 
      } 
  
  slider4.y = slider4.y+slider4.speed;
    if (slider4.speed > 0 & slider4.y > bumper4.y) { 
      WebMidi.outputs[0].playNote(chPitches[4]);
      note = chPitches[4];
      slider4.speed=globalSpeed*-1; 
      } 
    if (slider4.y<=50) { 
      slider4.speed=globalSpeed; 
      } 
  
  slider5.y = slider5.y+slider5.speed;
    if (slider5.speed > 0 & slider5.y > bumper5.y) { 
      WebMidi.outputs[0].playNote(chPitches[5]);
      note = chPitches[5];
      slider5.speed=globalSpeed*-1; 
      } 
    if (slider5.y<=50) { 
      slider5.speed=globalSpeed; 
      } 
  
  slider6.y = slider6.y+slider6.speed;
    if (slider6.speed > 0 & slider6.y > bumper6.y) { 
      WebMidi.outputs[0].playNote(chPitches[6]);
      note = chPitches[6];
      slider6.speed=globalSpeed*-1; 
      } 
    if (slider6.y<=50) { 
      slider6.speed=globalSpeed; 
      } 
  
  slider7.y = slider7.y+slider7.speed;
    if (slider7.speed > 0 & slider7.y > bumper7.y) { 
      WebMidi.outputs[0].playNote(chPitches[7]);
      note = chPitches[7];
      slider7.speed=globalSpeed*-1; 
      } 
    if (slider7.y<=50) { 
      slider7.speed=globalSpeed; 
      } 
}

function mouseClicked(){
//Change Speed 920 125 930 125
if(mouseX>913&mouseX<927&mouseY>119+ctrlMove&mouseY<133+ctrlMove){
  globalSpeed = globalSpeed - 0.1;
}
  
if(mouseX>927&mouseX<938&mouseY>119+ctrlMove&mouseY<133+ctrlMove){
  globalSpeed = globalSpeed + 0.1;
}

  
  
}

function mouseDragged() {
  //Click to move Bumpers
  if (mouseX>80 && mouseX<120 && mouseY>55 && mouseY<345) {
    bumper0.y = mouseY;}
  if (mouseX>180 && mouseX<220 && mouseY>55 && mouseY<345) {
    bumper1.y = mouseY;}
   if (mouseX>280 && mouseX<320 && mouseY>55 && mouseY<345) {
    bumper2.y = mouseY;}
   if (mouseX>380 && mouseX<420 && mouseY>55 && mouseY<345) {
    bumper3.y = mouseY;}
     if (mouseX>480 && mouseX<520 && mouseY>55 && mouseY<345) {
    bumper4.y = mouseY;}
     if (mouseX>580 && mouseX<620 && mouseY>55 && mouseY<345) {
    bumper5.y = mouseY;}
     if (mouseX>680 && mouseX<720 && mouseY>55 && mouseY<345) {
    bumper6.y = mouseY;}
     if (mouseX>780 && mouseX<820 && mouseY>55 && mouseY<345) {
    bumper7.y = mouseY;}
}

class Zlider{
  constructor(tempX,tempY,tempSpeed){
    this.x = tempX;
    this.y = tempY;
    this.speed = tempSpeed;
    var state=1;
  }
  
  display(){
    stroke("#E9D2DE"); 
    strokeWeight(2);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x,this.y,20);
    }
  
  }

class Bumper{
  constructor(tempX,tempY){
    this.x = tempX;
    this.y = tempY;
  }
  
  display(){
    stroke("#D096B5");  
    strokeWeight(2);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x,this.y,12);
  }
  
}

