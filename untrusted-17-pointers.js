#Mark all traps and teleporters that lead to traps so the player can avoid them manually.
		    var x1 = t1.getX();
        var y1 = t1.getY();
        var x2 = t2.getX();
        var y2 = t2.getY();
        if (t1.getType() == 'trap') {
        	map.setSquareColor(x1, y1, 'red');
        }
        else if (t1.getType() == 'teleporter' && t2.getType() == 'trap') {
        	map.setSquareColor(x1, y1, 'red');
        }
        if (t2.getType() == 'trap') {
        	map.setSquareColor(x2, y2, 'red');
        }
        else if (t2.getType() == 'teleporter' && t1.getType() == 'trap') {
        	map.setSquareColor(x2, y2, 'red');
        }
#Note that maps can generate without solutions. Likel there is a better way to solve this.
