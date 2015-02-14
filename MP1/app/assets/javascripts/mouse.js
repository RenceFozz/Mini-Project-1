document.addEventListener("DOMContentLoaded", init, false);

var x = 0;
var y = 0;

function init()
{
    var canvas = document.getElementById("myCanvas");
    canvas.addEventListener("mousedown", getPosition, false);
}

function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

function getPosition(event)
{
    var c = document.getElementById("myCanvas");
	/*
    if (event.x != undefined && event.y != undefined)
    {
        x = event.x;
        y = event.y;
    }
	
    x -= c.offsetLeft;
    y -= c.offsetTop;
	*/
	
	coords = c.relMouseCoords(event);
	x = coords.x;
	y = coords.y;
	
    console.log("x: " + x + "  y: " + y);
    addImage();
}