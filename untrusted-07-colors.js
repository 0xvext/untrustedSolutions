#Set the function phone to cycle the player color
        var player = map.getPlayer();
        
		    if (player.getColor() == '#0f0'){player.setColor('#f00')}
        	else if (player.getColor() == '#f00'){player.setColor('#ff0')}
	        else if (player.getColor() == '#ff0'){player.setColor('#0f0')};
