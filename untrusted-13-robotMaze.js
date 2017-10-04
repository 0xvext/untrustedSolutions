#Command robot to move with a bias toward the player's location, but allow for some random movement. If the player moves to the bottom row, move the robot 'up.'
#Note: Does not work for all maps. Needs a better solution.
    var moves = ['up','down','left','right'];
    //Determine the distance between the robot and the player as (x,y) values
    var leftDist = me.getX() - player.getX();
    var upDist = me.getY() - player.getY();
    /*Set a direction based on the distance values, with a bias based
    toward the greater value in the pair, and a slight bias for
 	'up' and 'left' when distances are equal*/
    var direction;
    if (player.getY() == map.getHeight() - 1) {
    	direction = 'up';
    }
    else if (upDist == 0 && leftDist == 0) {
        return;
    } else if (upDist > 0 && upDist >= leftDist && me.canMove('up')) {
        direction = 'up';
    } else if (upDist < 0 && upDist < leftDist && me.canMove('down')) {
        direction = 'down';
    } else if (leftDist > 0 && leftDist >= upDist && me.canMove('left')) {
        direction = 'left';
    } else if (leftDist < 0 && leftDist < upDist && me.canMove('right')) {
        direction = 'right';
    }
    else {
    //Select a random adjacent direction
    direction = moves[map.getRandomInt(0, moves.length - 1)];
	}
    if (me.canMove(direction)) {
        me.move(direction);
    }
