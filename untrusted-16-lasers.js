#Modify line 49 to reveal the color of each laser.
        ctx.strokeStyle = color;

#Assign the function phone to rotate the player's color.
map.getPlayer().setPhoneCallback(function () {
    var player = map.getPlayer();

if (player.getColor() == '#0f0'){player.setColor('red')}
    else if (player.getColor() == 'red'){player.setColor('yellow')}
    else if (player.getColor() == 'yellow'){player.setColor('teal')}
    else if (player.getColor() == 'teal'){player.setColor('#0f0')};

});
#Note: Including the player's original color value #0f0 is not necessary.
