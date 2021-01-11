var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-30;
    var dx = 2;
    var dy = -2;
    var ballRadius = 30;
    var gold = 0;
    var speed = 3;



    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
	function displayGolds()  {    
	document.getElementById("clicks").innerHTML = gold;
	}
	function addGold(x) {
	   x = 1;
       gold = gold + x;
    displayGolds()
	}

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    var nb = Math.floor(Math.random() * speed) + (speed - 2)

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = - nb;
        addGold()
    }
    if (x + dx < ballRadius) {
    	dx = nb;
    	addGold()
    }

    if(y + dy > canvas.height-ballRadius) {
        dy = -nb;
        addGold()
    }
    if (y + dy < ballRadius) {
    	dy =  nb;
    	addGold()
    }
    
    x += dx;
    y += dy;
	}
	function displayGolds()  {    
	document.getElementById("clicks").innerHTML = gold;
	}

	function ballSpeed() {
		var speedCost = 5;
		if (golds >= speedCost) {
			golds = golds - speedCost;
			speed = speed + 1.5
			speedCost = speedCost*1.5;
		}
		displayGolds()
		displaySpeed()
	}
	function displaySpeed()  {    
	document.getElementById("currentspeed").innerHTML = speed;
	}
    setInterval(draw, 20);