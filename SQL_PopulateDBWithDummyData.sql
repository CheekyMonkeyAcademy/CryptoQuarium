use cryptoquarium_db;

INSERT INTO aquaria (tankDescription, price, quantityAvailable, numFishAllowed, numDecorationsAllowed, createdAt, updatedAt)
VALUES  ('venti', '9.99','1000', '7', '4', '2018-1-1', '2018-1-1'),
        ('grande', '7.99', '1000',  '5', '3', '2018-1-1', '2018-1-1'),
        ('tall', '5.49', '1000', '3', '2', '2018-1-1', '2018-1-1');


INSERT INTO aquariumDecorations (decoration, price, createdAt, updatedAt)
VALUES  ('gravel', '2.50', '2018-1-1', '2018-1-1'),
        ('holidayTree', '2.99', '2018-1-1', '2018-1-1'),
        ('seaweed', '1.99', '2018-1-1', '2018-1-1'),
        ('submarine', '5.99', '2018-1-1', '2018-1-1'),
        ('rustyBike', '7.97', '2018-1-1', '2018-1-1'),
        ('anchor', '5.49', '2018-1-1', '2018-1-1');

-- The following are optional for future use
-- 'rock', 'castle', 'sunkenShip','bubbleMarker', 'teeterTotter', 'corucopia', 'roboticTurkey', 'diver', 'hookHand', 'pillars', 'aquiaticPlant', 'driftWood', 'startFish', 'anemore', 'harpoon', 'hotAirBallon', 'trafficCone', 'lantern', 'beachBall', 'windMill', 'pirateSkull', 'mermaid', 'pyramid', 'necklace', 'treasure', 'golfBall');




-- This sets DEFAULT values for fish in the Aquarium - key pieces:  
-- -- codeSpecies:  This MUST match the CSS/Fish Name - this is how we map the components ---- we can use this to sub in differnt fish models later easily
-- -- randomizeVar:  This is a variable for  what values WILL BE RANDOMIZED on fish creation.  
-- -- -- format for this:  {color:[array of colors IE color1r, color2b, etc], percent:true/false: degree: true/false}
INSERT INTO `cryptoquarium_db`.`fishes` (`species`, `codeSpecies`, `color1r`, `color1b`, `color1g`, `color2r`, `color2b`, `color2g`, `degree`, `percent`, `randomizeVar`, `quantityAvailable`, `price`, `createdAt`, `updatedAt`) VALUES ('Fish', 'Fish', '255', '94', '0', '2', '83', '235', '145', '72', '{"color": ["color1r", "color1b", "color1g", "color2r", "color2b", "color2g"], "degree": true, "percent": true}', '1000', '1', '2018-1-7', '2018-1-7');
INSERT INTO `cryptoquarium_db`.`fishes` (`species`, `codeSpecies`, `color1r`, `color1b`, `color1g`, `color2r`, `color2b`, `color2g`, `degree`, `percent`, `randomizeVar`, `quantityAvailable`, `price`, `createdAt`, `updatedAt`) VALUES ('Puffer Fish', 'PufferFish', '0', '0', '0', '242', '237', '136', '180', '50', '{"color": ["color1r", "color1b", "color1g"], "degree": true, "percent": true}', '1000', '1', '2018-1-7', '2018-1-7');


-- INSERT INTO userAquiarium ('name', 'tankDescription', 'numFishAllowed', 'numDecorationsAllowed', 'background', 'lightingEffect');
-- VALUES  ('', '', '', '', '', ''),
--         ('', '', '', '', '', ''),
--         ('', '', '', '', '', ''),
--         ('', '', '', '', '', ''),
--         ('', '', '', '', '', '');

