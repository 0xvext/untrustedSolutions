#Command the robot to move using a static set of directions based on the level layout.
#Note: Not an elegant solution. Should come up with a better one.
			if (i < 19) {
            	me.move('right');
            	i++;
          	}
            else if (i < 23) {
            	me.move('down');
                i++;
            }
            else if (i < 38) {
            	me.move('right');
                i++;
            }
            else if (i < 39) {
            	me.move('up');
                i++
            }
            else if (i < 56) {
            	me.move('right');
                i++;
            }
            else {
            	me.move('down');
            }
