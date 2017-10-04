#Define a a use for the function phone to shoot at the boss.
map.defineObject('myBullet', {
        'type': 'dynamic',
        'symbol': '|',
        'color': 'blue',
        'interval': 100,
        'projectile': true,
        'behavior': function (me) {
            me.move('up');
        }
})

map.getPlayer().setPhoneCallback(function () {
        var player = map.getPlayer();
        map.placeObject(player.getX(), player.getY() - 2, 'myBullet');
});
#Move to the row beneath the boss and remain stationary until the boss passes over you. Pick up the function phone, and let him have it.
