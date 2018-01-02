use cryptoquarium_db;

INSERT INTO aquaria (tankDescription, numFishAllowed, numDecorationsAllowed, createdAt, updatedAt)
VALUES  ('venti', '7', '4', '2018-1-1', '2018-1-1'),
        ('grande', '5', '3', '2018-1-1', '2018-1-1'),
        ('tall', '3', '2', '2018-1-1', '2018-1-1');


INSERT INTO aquariumDecorations (decoration, price, createdAt, updatedAt)
VALUES  ('gravel', '2.50', '2018-1-1', '2018-1-1'),
        ('holidayTree', '2.99', '2018-1-1', '2018-1-1'),
        ('seaweed', '1.99', '2018-1-1', '2018-1-1'),
        ('submarine', '5.99', '2018-1-1', '2018-1-1'),
        ('rustyBike', '7.97', '2018-1-1', '2018-1-1'),
        ('anchor', '5.49', '2018-1-1', '2018-1-1');
-- The following are optional for future use
-- 'rock', 'castle', 'sunkenShip','bubbleMarker', 'teeterTotter', 'corucopia', 'roboticTurkey', 'diver', 'hookHand', 'pillars', 'aquiaticPlant', 'driftWood', 'startFish', 'anemore', 'harpoon', 'hotAirBallon', 'trafficCone', 'lantern', 'beachBall', 'windMill', 'pirateSkull', 'mermaid', 'pyramid', 'necklace', 'treasure', 'golfBall');

-- INSERT INTO userAquiarium ('name', 'tankDescription', 'numFishAllowed', 'numDecorationsAllowed', 'background', 'lightingEffect');
-- VALUES('', '', '', '', '', '');
-- VALUES('', '', '', '', '', '');
-- VALUES('', '', '', '', '', '');
-- VALUES('', '', '', '', '', '');
-- VALUES('', '', '', '', '', '');

-- INSERT INTO fish ('species', 'image', 'movementMin', 'movementMax', 'movementPercent', 'movementHeightMin'. 'movementHeightMax', 'quantityAvailable', 'price');
-- VALUES('', '', '', '', '', '', '', '', '');
-- VALUES('', '', '', '', '', '', '', '', '');
-- VALUES('', '', '', '', '', '', '', '', '');
-- VALUES('', '', '', '', '', '', '', '', '');
-- VALUES('', '', '', '', '', '', '', '', '');
