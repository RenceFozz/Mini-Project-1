var red = true;
var curr="R";
var way=false;

function addImage()
{
	var c = document.getElementById('myCanvas');
	var ctx = c.getContext("2d");
	var image = new Image();
	if(red)
	{
		image.src = "Red Chip FINAL.png";
	}
	else
	{
		image.src = "Blue Chip FINAL.png";
	}
	image.onload = function()
  	{
		draw(ctx, image);
	}
}

function draw(ctx, image)
{
	//console.log("X: "+x+"  Y: "+y);
	if(!way)
	{
		for(var i=0;i<7;i++)
	  	{
	  		if(x>i*88 && x<(i*88)+88)
		  	{
			  	var j=0;
			  	while(data[i][j+1]=="N")
			  	{
					j++;
			  	}
			  	if(data[i][0]=="N")
			  	{
				  	ctx.drawImage(image, i*88, j*88);
					console.log("I: "+i+" J: "+j);
					data[i][j]=curr;
					if(curr=="R")
					{
						curr="B";
						red=false;
						document.getElementById("statusID").innerHTML = "Player 2's Turn";
					}
					else
					{
						curr="R";
						red=true;
						document.getElementById("statusID").innerHTML = "Player 1's Turn";
					}
					console.log("Image added");
					console.log(curr);
				}
				else
				{
					console.log("Invalid move.");
					if(curr=="R")
					{
						document.getElementById("statusID").innerHTML = "Invalid Move, Player 1";
					}
					else
					{
						document.getElementById("statusID").innerHTML = "Invalid Move, Player 2";
					}
				}
			  	i=7;
		  	}
	  	}
	}
	else
	{
		console.log("Game is finished. Refresh page.");
	}
  	var index=0;
  	for(var i=0;i<7;i++)
	{
		for(var j=0; j<6; j++)
	    {
	    	map[index] = data[i][j];
	    	//console.log("From Map: " + map[index]);
	    	index++;
	    }
	}
	way=checkData(data);
	if(lel)
	{
		if(curr=="B")
		{
			document.getElementById("statusID").innerHTML = "Player 1 WINS!";
		}
		else
		{
			document.getElementById("statusID").innerHTML = "Player 2 WINS!";
		}
	}
}