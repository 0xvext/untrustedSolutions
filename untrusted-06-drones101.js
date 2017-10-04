#Create 'defenseDrone' object and place four of them to trap the attackDrone.
map.defineObject('defenseDrone', {
            'type': 'dynamic',
            'symbol': 'D',
            'color': 'blue',
            'behavior': function (me) {
                moveToward(me, 'attackDrone');
            }
        });
    map.placeObject(40, 12, 'defenseDrone');
    map.placeObject(41, 11, 'defenseDrone');
    map.placeObject(44, 16, 'defenseDrone');
    map.placeObject(45, 15, 'defenseDrone');
