var data;
var splitString;
var name;
var row;
//var arrdata=[];
function preload(){
    data=loadStrings('event.csv');
}

function setup()
{
    
    createCanvas(800,500);
    background(0);

   doit();

}
function doit()
{
    
for( var i=1;i<data.length;i++)
   { 

    textSize(random(40));   
    row=data[i];
       splitString = split(row, ",");
fill(random(256), random(256), random(256));
         
text(splitString[2],random(500),random(300));
         

}

}