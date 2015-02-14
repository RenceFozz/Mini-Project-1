var data = [];
for (var i=0; i<7; i++) 
{
	data[i] = [];
}

var map=new Array(42);

for (var i=0; i<7; i++) 
{
    for(var j=0; j<6; j++)
    {
    	data[i][j] = "N";
    }
}

var index=0;
for(var i=0;i<7;i++)
{
	for(var j=0; j<6; j++)
    {
    	map[index] = data[i][j];
    	index++;
    }
}