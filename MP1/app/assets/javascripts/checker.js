var lel = false;

function checkData(data)
{
	var go=true;
	var three=0;
	var temp = 0;
	var inc=0;

	//FOR HORIZONTALS
	for(var i=0;i<24;i++)
	{
		temp=i+6;
		three=0;
		go=true;
		while(temp<=i+18 && go)
		{
			if(map[i]==map[temp] && map[i]!="N")
			{
				three+=1;
				temp+=6;
			}
			else
			{
				go=false;
			}
		}
		if(three==3)
		{
			i=24;
			lel=true;
		}
	}

	//FOR VERTICALS
	for(var i=0;i<7;i++)
	{
		for(var j=0;j<6;j++)
		{
			three=0;
			for(inc=1;inc<=j+3;inc++)
			{
				if(data[i][j]==data[i][j+inc] && data[i][j]!="N")
				{
					three++;
					//console.log("Match Found");
					go=true;
				}
				else
				{
					go=false;
				}
				if(!go)
				{
					inc=j+4;
				}
			}
			if(three==3)
			{
				i=7;
				j=6;
				lel=true;
			}
		}
	}

	//FOR DIAGONALS 
	for(var i=0;i<7;i++)
	{
		for(var j=0;j<6;j++)
		{
			if(i<=3 && j<3)
			{
				three=0;
				//console.log("Northeast");
				for(var inc=1;inc<4;inc++)
				{
					if(data[i][j]==data[i+inc][j+inc] && data[i][j]!="N")
					{
						three++;
						//console.log("Match Found");
						go=true;
					}
					else
					{
						go=false;
					}
					if(!go)
					{
						inc=4;
					}
				}
				//console.log(data[i+1][j+1]);
			}
			
			else if(i<=3 && j>2 && three!=3)
			{
				//console.log("Southeast");
				three=0;
				for(var inc=1;inc<4;inc++)
				{
					if(data[i][j]==data[i+inc][j-inc] && data[i][j]!="N")
					{
						three++;
						//console.log("Match Found");
						go=true;
					}
					else
					{
						go=false;
					}
					if(!go)
					{
						inc=4;
					}
				}
				//console.log(data[i+1][j-1]);
			}
			/*
			else if(i>=3 && j<3 && three!=3)
			{
				console.log("Northwest");
				console.log(data[i-1][j+1]);
			}
			
			else if(i>=3 && j>2 && three!=3)
			{
				console.log("Southwest");
				console.log(data[i-1][j-1]);
			}
			*/
			if(three==3)
			{
				i=7;
				j=6;
				lel=true;
			}
		}
	}
	
	if(lel)
	{
		console.log("Ready to roll!");
	}
	else
	{
		console.log("Nope. Sorry bruh.");
	}
	return lel;
}