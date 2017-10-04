#Move the left wall by changing the original draw position X value to the left.
    for (y = 10; y <= map.getHeight() - 3; y++) {
        map.placeObject(3, y, 'block');
        map.placeObject(map.getWidth() - 5, y, 'block');
    }
    
    for (x = 5; x <= map.getWidth() - 5; x++) {
        map.placeObject(x, 10, 'block');
        map.placeObject(x, map.getHeight() - 3, 'block');
    }
