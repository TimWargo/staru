CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    screen_name VARCHAR (255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    vkey VARCHAR(255),
    valid tinyint(1)
);

CREATE TABLE games (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    year int NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    popularity DECIMAL(2,1) DEFAULT 0.0,
    platform VARCHAR(255) NOT NULL,
    pic VARCHAR(255) NOT NULL,
    description LONGTEXT
);

CREATE TABLE genres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

CREATE TABLE game_genres (
    game_id INT NOT NULL REFERENCES games(id),
    genre_id INT NOT NULL REFERENCES genres(id),
    PRIMARY KEY (game_id, genre_id)
);

CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT NOT NULL REFERENCES accounts(id),
    game_id INT NOT NULL REFERENCES games(id),
    title VARCHAR(255),
    description LONGTEXT,
    rating DECIMAL(2,1)
);

INSERT INTO accounts (email, screen_name, password) VALUES
 ("unofficial1@anemail.com", "lexiP297", "Password1"),
 ("unofficial2@anemail.com", "Calvin2690", "Password2"),
 ("unofficial3@anemail.com", "Parker2357", "Password3"),
 ("unofficial4@anemail.com", "Rachel590", "Password4"),
 ("unofficial5@myspace.com", "Ryan32007", "Password5");

INSERT INTO games (title, year, price, popularity,platform, pic, description) VALUES
 ("The Witcher 3: Wild Hunt",2015,7.99,9.0,"PC","/Images/the_witcher_3_wild_hunt.png","With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format."),
 ("Elden Ring",2022,59.99,6.8,"PC","/Images/elden_ring.png","A New World Created By Hidetaka Miyazaki And George R. R. Martin. ELDEN RING, developed by FromSoftware, Inc. and BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki creator of the influential DARK SOULS video game series; and George R.R. Martin author of The New York Times best-selling fantasy series, A Song of Ice and Fire. Danger and discovery lurk around every corner in FromSoftware's largest game to-date. Hidetaka Miyazaki, President and Game Director of FromSoftware Inc. Known for directing critically-acclaimed games in beloved franchises including Armored Core, Dark Souls, and Sekiro: Shadows Die Twice. George R.R. Martin is the #1 New York Times bestselling author of many novels, including the acclaimed series A Song of Ice and Fire - A Game of Thrones, A Clash of Kings, A Storm of Swords, A Feast For Crows, and A Dance with Dragons. As a writer-producer, he has worked on The Twilight Zone, Beauty and the Beast, and various feature films and pilots that were never made."),
 ("Red Dead Redemption 2",2018,59.99,6.4,"PC","/Images/red_dead_redemption_2.jpg","Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland. The game’s vast and atmospheric world also provides the foundation for a brand new online multiplayer experience. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang has to rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal fissures threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang that raised him."),
 ("Microsoft Flight Simulator",2020,59.99,7.1,"PC","/Images/microsoft_flight_simulator.jpg","From light planes to wide-body jets, fly highly detailed and accurate aircraft in the next generation of Microsoft Flight Simulator. Test your piloting skills against the challenges of night flying, real-time atmospheric simulation and live weather in a dynamic and living world."),
 ("God of War",2022,49.99,8.6,"PC","/Images/god_of_war.jpg","The God of War has changed... and this is not the Kratos you know. A difficult and unfamiliar road awaits as you explore a stunning retelling of a classic story. Join Kratos as he adventures through a deep and reflective journey of growth, violence and the desire to become a better man for the sake of his son. In a world of monsters, dragons and gods, the weight of responsibility rests heavy on your shoulders -- and when your life is filled with blood and chaos, how can you prevent the mistakes of the past in order to protect your future?"),
 ("Hades",2020,24.99,8.8,"PC","/Images/hades.png","Defy the god of death as you hack and slash your way out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion and Transistor."),
 ("Minecraft",2011,26.95,8.1,"PC","/Images/minecraft.png","The game involves players creating and destroying various types of blocks in a three dimensional environment. The player takes an avatar that can destroy or create blocks, forming fantastic structures, creations and artwork across the various multiplayer servers in multiple game modes."),
 ("Halo Infinite",2021,59.99,6.7,"PC","/Images/halo_infinite.jpg","When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Begin anew and step inside the armor of humanity’s greatest hero to experience an epic adventure and finally explore the scale of the Halo ring itself."),
 ("DOOM Eternal",2020,39.99,8.8,"PC","/Images/doom_eternal.jpg","DOOM Eternal is the direct sequel to 2016's DOOM. Developed by id Software, DOOM Eternal delivers the ultimate combination of speed and power, along with the next leap in push-forward, first-person combat. As the DOOM Slayer, you’ll return to take your vengeance against the forces of Hell. Set to an all-new pulse-pounding soundtrack composed by Mick Gordon, you fight across dimensions as you slay new and classic demons with powerful new weapons and abilities."),
 ("Deathloop",2021,59.99,5.1,"PC","/Images/deathloop.jpg","If at first you don't succeed Die, Die Again. From the team at Arkane Lyon comes an innovative take on first-person action. 'DEATHLOOP' transports players to the lawless island of Blackreef in an eternal struggle between two extraordinary assassins. Explore stunning environments and meticulously designed levels in an immersive gameplay experience that lets you approach every situation any way you like. Hunt down targets all over the island in an effort to put an end to the cycle once and for all, and remember, if at first you don't succeed die, die again.");

INSERT INTO games (title,year,price,popularity,platform,pic,description) VALUES
 ("God of War",2018,19.99,9.1,"PlayStation","/Images/god_of_war.jpg","The God of War has changed... and this is not the Kratos you know. A difficult and unfamiliar road awaits as you explore a stunning retelling of a classic story. Join Kratos as he adventures through a deep and reflective journey of growth, violence and the desire to become a better man for the sake of his son. In a world of monsters, dragons and gods, the weight of responsibility rests heavy on your shoulders -- and when your life is filled with blood and chaos, how can you prevent the mistakes of the past in order to protect your future?"),
 ("Marvel's Spider-Man",2018,39.99,8.7,"PlayStation","/Images/marvels_spider_man.jpg","This isn't the Spider-Man you've known before, or seen in a movie. This is an experienced Peter Parker who is more masterful in fighting major crimes in New York City. At the same time he is struggling to balance his tumultuous personal life and career while the fate of nine million New Yorkers rests upon his shoulders."),
 ("The Last of Us Part II",2020,19.99,5.7,"PlayStation","/Images/the_last_of_us_part_ii.jpg","Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions."),
 ("Horizon Zero Dawn",2017,9.99,8.4,"PlayStation","/Images/horizon_zero_dawn.jpg","Horizon Zero Dawn is a PS4-exclusive action role playing game developed by Guerrilla Games, creators of the Killzone franchise. As Horizon Zero Dawn’s main protagonist Aloy, a skilled hunter, explore a vibrant and lush world inhabited by mysterious mechanized creatures. Embark on an emotional journey to unravel mysteries of tribal societies, ancient artifacts and advanced technologies that will determine the fate of this planet, and of life itself."),
 ("Ghost of Tsushima",2020,69.99,9.1,"PlayStation","/Images/ghost_of_tsushima.jpg","The year is 1274. Samurai warriors are the legendary defenders of Japan -- until the fearsome Mongol Empire invades the island of Tsushima, wreaking havoc and conquering the local population. As one of the last surviving samurai, you rise from the ashes to fight back. But, honorable tactics won't lead you to victory. You must move beyond your samurai traditions to forge a new way of fighting -- the way of the Ghost -- as you wage an unconventional war for the freedom of Japan."),
 ("Bloodborne",2015,9.99,8.9,"PlayStation","/Images/bloodborne.jpg","Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with uncovering its darkest secrets which will be necessary for you to survive. Armed with a singular arsenal of weaponry, including guns and saw cleavers, you'll require wits, strategy and reflexes to dispatch the agile and intelligent enemies that guard the city's underbelly. You will utility holy chalices to access an array of vast underground ruins, chock full of traps, beasts, and rewards, to explore and conquer on your own or with other people."),
 ("The Witcher 3: Wild Hunt",2015,49.99,9.2,"PlayStation","/Images/the_witcher_3_wild_hunt.png","With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format."),
 ("Uncharted 4: A Theif's End",2016,39.99,8.8,"PlayStation","/Images/uncharted_4_a_thiefs_end.jpg","Set 3 years after the events of Uncharted 3, Nathan Drake has apparently left the world of fortune hunting behind. However, it doesn’t take long for adventure to come calling when Drake’s brother, Sam, re-emerges asking for his help to save his own life and offering an adventure Drake cannot resist. On the hunt for Captain Henry Avery’s long-lost treasure, Sam and Drake embark on a journey to find Libertalia, the pirate utopia deep in the forests of Madagascar. Uncharted 4: A Thief’s End takes players around the globe, through jungle isles, urban cities and snow-capped peaks on the search for Avery’s fortune."),
 ("Final Fantasy VII Remake",2020,59.99,8.1,"PlayStation","/Images/final_fantasy_vii_remake.jpg","Long ago, we looked upon a foreboding sky. The memory of the star that threatened all burns eternal in our hearts. In its wake came an age of silence. Yet with each fond remembrance, we knew those encountered were not forgotten, that some day we would see them again. Perhaps it was no more than wishful thinking. But after the long calm, there are the beginnings of a stir. The reunion at hand may bring joy, it may bring fear, but let us embrace whatever it brings. For they are coming back. At last the promise has been made."),
 ("Red Dead Redemption 2"2018,59.99,8.6,"PlayStation","/Images/red_dead_redemption_2.jpg","Developed by the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America’s unforgiving heartland. The game’s vast and atmospheric world also provides the foundation for a brand new online multiplayer experience. America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang has to rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal fissures threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang that raised him.");

INSERT INTO games (title,year,price,popularity,platform,pic,description) VALUES
 ("Fortnite",2017,0,3.7,"Xbox","/Images/fortnite.jpg","The Storm came without warning and wiped out 98 percent of the world's population in a flash. Poof. Adios. Sayonara. Then came the monsters, wave after wave, night after night. Destroying everything in their path. But it's not all doom and gloom. In an abandoned missile silo, weve found one of our first weapons against the Storm you. We're looking for a few good commanders like you to help make a difference, push back the storm and protect those among us who are unable to protect themselves. Explore the world. Rescue survivors. Make hundreds of guns, swords, and things that go boom. Make impregnable forts. Tastefully decorate with sniper perches, poison gas traps, and jump pads. Take back the world. You know, the usual. And be sure to invite your friends. Welcome to Fortnite."),
 ("Call of Duty: Modern Warfare",2019,29.99,3.9,"Xbox","/Images/call_of_duty_modern_warfare.jpg","Prepare to go dark, Modern Warfare® is back! The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power. Call of Duty®: Modern Warfare® engulfs fans in an incredibly raw, gritty, provocative narrative that brings unrivaled intensity and shines a light on the changing nature of modern war. Developed by the studio that started it all, Infinity Ward delivers an epic reimagining of the iconic Modern Warfare® series from the ground up. In the visceral and dramatic single-player story campaign, Call of Duty®: Modern Warfare® pushes boundaries and breaks rules the way only Modern Warfare® can. Players will engage in breathtaking covert operations alongside a diverse cast of international special forces throughout iconic European cities and volatile expanses of the Middle East. And the story doesn't end there. In Call of Duty®: Modern Warfare®, players will be thrust into an immersive narrative spanning the entire game. Experience the ultimate online playground with classic multiplayer, or squad-up and play cooperatively in a collection of elite operations accessible to all skill levels."),
 ("Apex Legends",2019,0,7.0,"Xbox","/Images/apex_legends.jpg","Conquer with character in Apex Legends, a free-to-play Battle Royale shooter where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier. Master an ever-growing roster of diverse legends, deep tactical squad play, and bold new innovations that level-up the Battle Royale experience—all within a rugged world where anything goes. Welcome to the next evolution of Battle Royale."),
 ("Elden Ring",2022,59.99,7.5,"Xbox","/Images/elden_ring.png","A New World Created By Hidetaka Miyazaki And George R. R. Martin. ELDEN RING, developed by FromSoftware, Inc. and BANDAI NAMCO Entertainment Inc., is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki creator of the influential DARK SOULS video game series; and George R.R. Martin author of The New York Times best-selling fantasy series, A Song of Ice and Fire. Danger and discovery lurk around every corner in FromSoftware's largest game to-date. Hidetaka Miyazaki, President and Game Director of FromSoftware Inc. Known for directing critically-acclaimed games in beloved franchises including Armored Core, Dark Souls, and Sekiro: Shadows Die Twice. George R.R. Martin is the #1 New York Times bestselling author of many novels, including the acclaimed series A Song of Ice and Fire - A Game of Thrones, A Clash of Kings, A Storm of Swords, A Feast For Crows, and A Dance with Dragons. As a writer-producer, he has worked on The Twilight Zone, Beauty and the Beast, and various feature films and pilots that were never made."),
 ("Grand Theft Auto 5",2014,19.99,7.8,"Xbox","/Images/gta_5.png","Grand Theft Auto 5 melds storytelling and gameplay in unique ways as players repeatedly jump in and out of the lives of the game's three protagonists, playing all sides of the game's interwoven story."),
 ("Tom Clancy's Rainbow Six Seige",2015,9.99,7.0,"Xbox","/Images/rainbow_six_seige.png","Tom Clancy’s Rainbow Six Siege is inspired by real world counter-terrorist organizations, and inserts players in the middle of lethal close-quarters engagements. For the first time in a Tom Clancy’s Rainbow Six game, players can choose from a variety of unique Counter Terrorist Operators and engage in tangible sieges, a new style of assault in which enemies have the means to transform their environments into modern strongholds while Rainbow Six teams lead the assault to breach the enemy’s position."),
 ("NBA 2K22",2021,19.79,4.6,"Xbox","/Images/nba_2k22.jpg","Enjoy competitive gameplay, online features, and a variety of game modes, including myCAREER, as you put together your dream team in this basketball video game. A WORLD OF BASKETBALL. NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today’s stars and yesterday’s legends. Live out your own pro journey in MyCAREER and experience your personal rise to the NBA. Flex your management skills as a powerful Executive in MyGM and MyLEAGUE. Anyone, anywhere can hoop in NBA 2K22."),
 ("Minecraft",2014,19.99,7.3,"Xbox","/Images/minecraft.png","The game involves players creating and destroying various types of blocks in a three dimensional environment. The player takes an avatar that can destroy or create blocks, forming fantastic structures, creations and artwork across the various multiplayer servers in multiple game modes."),
 ("Rocket League",2016,0,8.0,"Xbox","/Images/rocket_league.jpg","Fire your rockets. High-octane team sports. Get behind the wheel of a high-flying, hard-hitting rocket powered car and drive into the Rocket League arena. Choose from a variety of vehicles to drive and customise in this football-meets-destruction derby team sport and master the skills youll need to fire home the goals. Soar high into the air to perform daring acrobatic strikes and daredevil saves, or use aggressive tactics to take down rival players at supersonic speeds."),
 ("Fallout 4",2015,19.99,6.6,"Xbox","/Images/fallout_4.jpg","As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.");

INSERT INTO games (title,year,price,popularity,platform,pic,description) VALUES
 ("Super Smash Bros. Ultimate",2018,59.99,8.6,"Nintendo Switch","/Images/super_smash_bros_ultimate.jpg","Inklings from the Splatoon series, as well as returning Smash characters like Mario and Link will be making appearances in this classic Nintendo franchise's Switch debut. Faster combat, new items, new attacks, new defensive options, and more will keep the battle raging whether you’re at home or on the go."),
 ("Animal Crossing: New Horizons",2020,59.99,5.6,"Nintendo Switch","/Images/animal_crossing_new_horizons.jpg","If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package. Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service. But deep down, isn’t there a part of you that longs for…freedom? Then perhaps a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered. Peaceful creativity and charm await as you roll up your sleeves and make your new life whatever you want it to be. Collect resources and craft everything from creature comforts to handy tools. Embrace your green thumb as you interact with flowers and trees in new ways. Set up a homestead where the rules of what goes indoors and out no longer apply. Make friends with new arrivals, enjoy the seasons, pole-vault across rivers as you explore, and more."),
 ("The Legend of Zelda: Breath of the Wild",2017,59.99,8.7,"Nintendo Switch","/Images/the_legend_of_zelda.jpg","Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across fields, through forests and to mountain peaks as you discover what has become of the ruined kingdom of Hyrule in this open-air adventure. Explore the wilds of Hyrule any way you like - Climb up towers and mountain peaks in search of new destinations, then set your own path to get there and plunge into the wilderness. Along the way, you'll battle towering enemies, hunt wild beasts and gather ingredients for the food and elixirs you'll need to sustain you on your journey. More than 100 Shrines of Trials to discover and explore - Shrines dot the landscape, waiting to be discovered in any order you want. Search for them in various ways, and solve a variety of puzzles inside. Work your way through the traps and devices inside to earn special items and other rewards that will help you on your adventure."),
 ("Super Mario Odyssey",2017,59.99,8.9,"Nintendo Switch","/Images/super_mario_odyssey.jpg","New Evolution of Mario Sandbox-Style Gameplay. Mario embarks on a new journey through unknown worlds, running and jumping through huge 3D worlds in the first sandbox-style Mario game since Super Mario 64 and Super Mario Sunshine. Set sail between expansive worlds aboard an airship, and perform all-new actions, such as throwing Mario's cap."),
 ("Super Mario 3D World + Bowser's Fury",2021,59.99,8.7,"Nintendo Switch","/Images/super_mario_3d_world.png","The cat's out of the bag, Super Mario 3D World is on to the Nintendo Switch system. Pounce and climb through dozens of colorful stages! Mario (and his friends) can use power-ups like the Super Bell, which grants catlike abilities, like climbing and scratching. Work together locally or online with up to three other players to reach the goaland to see who can get a high score. The Super Mario 3D World + Bowser's Fury game features the same great co-op gameplay, creative levels and power-ups as the original game, but also so much more."),
 ("Metroid Dread",2021,59.99,8.7,"Nintento Switch","/Images/metroid_dread.jpg","Join intergalactic bounty hunter Samus Aran in her first new 2D Metroid™ story in 19 years. Samus’ story continues after the events of the Metroid™ Fusion game when she descends upon planet ZDR to investigate a mysterious transmission sent to the Galactic Federation. The remote planet has become overrun by vicious alien lifeforms and chilling mechanical menaces. Samus is more agile and capable than ever, but can she overcome the inhuman threat stalking the depths of ZDR?"),
 ("Luigi's Mansion 3",2019.59.99,8.5,"Nintendo Switch","/Images/luigis_mansion_3.jpg","Luigi embarks on a dream vacation with Mario and friends upon receiving an invitation to a luxurious hotel. However, his dream quickly becomes a nightmare when King Boo reveals everything had been a ploy to capture Mario and friends. With the assistance of Professor E. Gadd once again, the reluctant and cowardly hero Luigi traverses up and down treacherous floors of the now-ominous hotel on a quest to save them. Wield the upgraded Poltergust G-00 to slam and blow away the ghosts’ defenses, or summon Gooigi, an all-green doppelganger that can help Luigi overcome obstacles he can’t get past alone. Interchange between Luigi and Gooigi as one player, or grab a friend and control one each. For more frenetic multiplayer action, race the timer to clear various objectives on a series of floors in ScareScraper mode. ScareScraper mode can be played online* or locally with up to eight players on four Nintendo Switch systems (additional games required; sold separately)."),
 ("Super Mario Maker 2",2019,59.99,8.5,"Nintendo Switch","/Images/super_mario_maker_2.jpg","Mario fans of the world, unite! Now you can play, create, and share the side-scrolling Super Mario courses of your dreams in the Super Mario Maker 2 game, available exclusively on the Nintendo Switch™ system! Dive into the single-player Story Mode and play built-in courses to rebuild Princess Peach’s castle. Make your own courses, alone or together. And with a Nintendo Switch Online membership*, share your courses, access a near-endless supply made by others, enjoy online multiplayer, and more. A new side-scrolling Mario adventure that unleashes the creative potential of Super Mario Maker 2 awaits in Story Mode, which contains over 100 built-in courses. And in Course Maker, a wide range of parts, tools, and more are available so you can construct your own courses. Want coin-shooting cannons? Bowser riding on a giant Goomba? Cat Mario sliding down slopes to take out an army of baddies? Go for it! You call the shots. Pass a Joy-Con controller to a partner to build cooperatively on a single system."),
 ("Pokemon Legends: Arceus",2022,59.99,8.2,"Nintendo Switch","/Images/pokemon_legends_arceus.jpg","A Bold New Direction. The Pokémon Legends: Arceus game honors past Pokémon games' core gameplay while infusing new action and RPG elements. You'll need to catch, survey, and research wild Pokémon in a long-gone era of the Sinnoh region to create and complete the region's first Pokédex."),
 ("Hades",2020,24.99,9.0,"Nintendo Switch","/Images/hades.png","Defy the god of death as you hack and slash your way out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion and Transistor.");


INSERT INTO genres (name) VALUES
 ("Action"), ("Role-Playing"), ("Adventure"), ("Simulation"), ("Sandbox"), ("Shooter"), ("Survival"), ("Sports"), ("Fighting"), ("Platformer");

INSERT INTO game_genres(game_id,genre_id) VALUES
 (1,1), (1,2), 
 (2,1), (2,2),
 (3,1), (3,3),
 (4,4),
 (5,1), (5,3),
 (6,1), (6,3),
 (7,1), (7,3), (7,5),
 (8,1), (8,6),
 (9,1), (9,6),
 (10,1), (10,6)
 (11,1), (11,3),
 (12,1), (12,3),
 (13,1), (13,3), (13,7),
 (14,1), (14,2), (14,3),
 (15,1), (15,3),
 (16,1), (16,2), (16,3),
 (17,1), (17,2),
 (18,1), (18,3),
 (19,2),
 (20,1), (20,3),
 (21,1), (21,6),
 (22,1), (22,6),
 (23,1), (23,6),
 (24,1), (24,2),
 (25,1), (25,3),
 (26,1), (26,6),
 (27,8),
 (28,1), (28,3), (28,5),
 (29,8),
 (30,2),
 (31,1), (31,9),
 (32,4),
 (33,1), (33,3),
 (34,1), (34,10),
 (35,1), (35,3),
 (36,1), (36,3), (36,10),
 (37,1), (37,3),
 (38,1), (38,10),
 (39,2),
 (40,1), (40,3);

INSERT INTO reviews (account_id,game_id,title,description,rating) VALUES
 (1,1,"Awesome","This game is an amazing game. I love the storyline of the game, the artwork, all of it. I have over 30 hours on this game, and it's the only game that I now play.",5.0),
 (2,1,"Great","The Witcher 3 is like having your cake and eating it. I honestly love this game.",4.0),
 (3,1,"Lags sometimes","The Witcher 3 is a pretty good game. The graphics are great, but the storyline is a little weird. Also, the game sometime lags on me or glitches out. I have tried uninstalling and reinstalling the game, but it doesn't work out.",3.0);

INSERT INTO reviews (account_id,game_id,title,description, rating) VALUES
 (4,2,"One World","This game is in one word: Perfection",5.0),
 (2,2,"There Will Never Be A Better Game","Words cannot describe how amazing this game is. Ever since day one, I cannot stop playing this game. I have not gone outside for over a month and I have turned into the doughboy ghost from Ghostbusters, but honestly this game is the only thing left that is amazing in my life.",5.0),
 (1,2,"Intensive","This game is pretty great. It is a lot of grinding, and if you can't put the time in to grind, there is no point to get this game.",3.0),
 (3,3,"Really Good Story","One of the best games that Rockstar has produced. While it is a really big map and a little hard to traverse, they make up for it with amazing storytelling, clean fight scenes, and overall amazing graphics. To put it simply, this game is amazing.",5.0),
 (1,3,"Learning Curve","It is a pretty good game. There is a steep learning curve to get over, but once you get past it, the game opens up to an amazing experience.",4.0),
 (4,3,"Really Wild in the West","Overall, this game is amazing. Their storyline, online missions, and attention to detail to the wild west definitely made for a good experience. I almost felt like I was living in the wild west at times.",4.0),
 (2,4,"Realistic","This game is pretty difficult. There is a big learning curve to get over. Microsoft did make the simulator to be as close to realistic as possible, which is why it got 4 stars.",4.0),
 (3,4,"Too Pricey","While this game has been a blast to play, I do not believe that it was worth the steep $59.99 price upon release.",3.0),
 (4,4,"Really Cool","Ever since I saw youtubers playing this game, I knew I had to play this game. I have always been into flying planes, so having a simulator that would let me test out different planes was amazing. From flying a Boeing B-52 to a 747, the game has run smoothly and given me an amazing experience.",5.0),
 (1,5,"Amazing Both Times","This game was so amazing, I went and played it through twice. Both times was an amazing experience.",5.0),
 (3,5,"Accurate Representation","As a big fan of the Norse mythology and the history of vikings, I was completely blown away by how accurate they kept the game. While they did modify some of the myths and stories (which I was not a fan of), I still loved the general accuracy that they kept. They definitely did their research.",5.0),
 (2,5,"Blown Away","Having played other games by them, God of War was still one of the best games that they have created. I love how much effort that they put into the game",4.0);

INSERT INTO reviews (account_id,game_id,title,description,rating) VALUES
 (1,6,"Incredible","This game is incredible. While this game is not for everyone, I completely love their storyline, graphics, and gameplay.",5.0),
 (2,6,"Pretty Good Game","This game is hands-down the best game I have played all year. While you will die. a lot. it really forces you to learn from your mistakes. I love it",5.0),
 (3,6,"Meh","Hades is a pretty decent game. While the graphics are sub-par, they make up for it a little in the combat",3.0),
 (4,7,"Amazing","After 10 years, this game is still hands-down one of the greatest games to come out of my generation. You would think that you would get bored by such a simplistic game as Minecraft, but if never fails to keep entertaining you with the infinite ways to play the game, and the recent updates have made it even better.",5.0),
 (1,7,"Still Incredible","Minecraft was the very first pc game that I have ever played, and I gotta say... it was honestly the best pc game to start off with. Not many games can top it.",5.0),
 (2,7,"Infinite Playthroughs","In addition to an incredible and expansive creative and survival mode, Minecraft offers hundreds of different game modes like Bed Wars to play, meaning you can never get bored from it",5.0),
 (3,8,"Ok","Half-baked because outside the crust, the campaign is good to play, but there is no structure or sustenance.",3.0),
 (4,8,"No Assassinations!","Halo Infinite is a pretty good addition to the Halo franchise. I am bummed though that they did not include assassinations like they said they would add.",3.0),
 (1,8,"Pretty Good","Halo Infinite is really cool. Its got an amazing storyline that not only ties into the current Halo storyline, but builds off of it.",4.0),
 (2,9,"HARD","Before I begin, I must give a fair warning: THIS GAME IS HARD. YOU WILL DIE. A LOT. Once you get over the fact that you will die and fail a lot, the game becomes really fun to play. It is very satisfying completing a boss battle that takes you 20 mins, but is incredibly frustrating when you don't.",4.0),
 (3,9,"Really Brutal","DOOM Eternal is like working the dinner shift of a very popular restaurant. Basically, there will be a lot of high-intensity battles followed by small breaks from the figting to recover.",3.0),
 (4,9,"Impossible to 100%","For those like me who are completionists, DOOM can be a very frustrating game to 100%. You will spend a lot of time exploring the map trying to find a way to access the collectible that is smirking at you from behind a closed gate.",4.0),
 (1,10,"Bad Storyline","Deathloop has really great fighting scenes, but a HORRIBLE storyline to follow. It's apparent where the budget was spent, and where it wasn't spent",3.0),
 (2,10,"Alright","The game is a really great game to play, not much in storyline, but awesome fight scenes and the graphics are great.",4.0),
 (3,10,"OK","The game overall is ok. Not great, not horrible, just ok.",3.0);

INSERT INTO reviews (account_id,game_id,title,description,rating) VALUES
 (1,11,"10/10","God of War is such an amazing, expansive game. 10/10 would play again.",5.0),
 (2,11,"A little difficult","The game is pretty good. It can be very difficult at times in terms of combat, but overall I have had little troubles.",4.0),
 (3,11,"Alright","This game is alright. Not the best game to have come out of the company in recent years though.",2.0),
 (4,12,"AWESOME","I have been looking forward to this game, and I gotta say...I was not disappointed. Swinging around Brooklyn is quite amazing.",5.0),
 (1,12,"Cool","This game is pretty amazing. The graphics can get a little laggy while swinging around, and sometimes you cannot swing from what should be a swingable object.",3.0),
 (2,12,"Alright","Being a Marvel's fan, this game was a dream come true. I really like the storyline and the feeling of swinging around the city. I do think that some of the plot was a bit forced, but overall I have no other complaints.",4.0),
 (3,13,"DO NOT BUY","This game is so much worse than the first one. I would recommend to anyone who played the first game... DO NOT BUY.",1.0),
 (4,13,"Not worth it","This game is not nearly as good as the first game. The story degrades, and the graphics are basically the same.",2.0),
 (1,13,"Yuck","The Last of Us Part II is like trying to eat an entire course of only broccoli, something that I absolutely hate.",1.0),
 (2,14,"Awesome","Horizon Zero Dawn was astonishing. The story was amazing.",4.0),
 (3,14,"4/5","The game was pretty good. The story was awesome, the graphics were meh, and the scenery were alright. Overall, 4/5 stars.",4.0),
 (4,14,"Cannot Get Enough","This game was really awesome. I played through the game in like one week, and I am on my second playthrough now.",5.0),
 (1,15,"Really Awesome","Ghost of Tsushima is amazing since the update. Based in feudal Japan, you get to feel what it would be like to go around Japan as a samurai, something I feel like everyone had wondered once in their life.",5.0),
 (2,15,"Awesome Fights","The game is really amazing. The story is pretty good, but they make up for it in action fights and impressive scenery.",5.0),
 (3,15,"Samurai Good","If you ever wanted to know what it would be like to be a sword-wielding samura... PLAY THIS GAME.",5.0),
 (4,16,"Awesome","Bloodborne is an amaing game. The story is pretty great, and the fighting is awesome.",4.0),
 (1,16,"Must Buy","Bloodborne is a must-buy for PlayStation. Just the right amount of challenge.",5.0),
 (2,16,"What","Too much blood, not enough birth.",3.0),
 (3,17,"Really Amazing","The Witcher 3 Wild Hunt is pretty good. I cannot get enough of this game.",4.0),
 (4,17,"Good Addition","This game is one of the best in the series. Having played all of them, I think The Witcher 3 is a great addition to the series.",5.0),
 (1,17,"Alright","This game was alright. Not amazing, not terrible. Alright.",3.0),
 (5,18,"Impressive","I never normally leave reviews for a game, but I could not go without complimenting this game for its amazing animations, storyline, and graphics.",5.0),
 (2,18,"Amazing","Uncharted 4 was a nice way to conclude the series. I will surely miss my time playing as Nathan Drake.",5.0),
 (3,18,"Little complicated","This game was surely breathtaking. The puzzles were a little complicated, and left me guessing for hours as to how to solve some of them, but I can say that all the hard work definitely paid off when I completed the game.",4.0),
 (4,19,"Need More","I have been a HUGE fan of the FF series, and FFVII Remake has left me craving more of it. This game is amazing and a complete masterpiece. Hands-down one of my favorite games right now.",5.0),
 (1,19,"Worth It","This game is a great remake of the original game, keeping the goofy elements that made the first game so amazing to play. I would definitely recommend this game to others.",4.0),
 (2,19,"Cool","FFVII Remake is a really cool game.",4.0),
 (3,20,"Impressive","Red Dead Redemption II is a pretty amazing game overall. While there are a few bugs and it can be really hard to control, the game is still impressive overall.",4.0),
 (4,20,"Make Stronger Horses","This game is kinda hard to play for those who are not used to all the controls. Not to mention, using the horse is kinda a waste because you can fall off of it from the lightest of attackts.",3.0),
 (1,20,"GTA V Better","The game is pretty cool. Not as great as GTA V though.",3.0);

INSERT INTO reviews (account_id,game_id,title,description,rating) VALUES
 (1,21,"FORTNITE","I love fortnite I love fortnite I love fortnite I love fortnite",5.0),
 (2,21,"Meh","Fortnite was an amazing game when it first released, but then it started to go downhill. Now, I stay away from the game entirely.",3.0),
 (3,21,"Hard","I don't understand what all the craze is for this Fortnite game, but I have a hard time playing the game. There is a huge learning curve to the game with building.",2.0),
 (4,22,"Pretty Good","COD Modern Warfare is an amazing game. The only issue I have with it is that they fell into the battlepass craze and now some of the best things are pay to win.",4.0),
 (1,22,"Wishing for the old times","Call of Duty has definitely lost some of its spark over the years. Since advanced warfare, the game became less about outgunning someone and more about out-maneuvering.",4.0),
 (2,22,"Good Game","This game is a pretty good game. In addition to a decent story, the multiplayer feature of COD is definitely impressive. I really enjoy playing a game or two after work.",5.0),
 (3,23,"Awesome","Apex Legends is definitely like the more sophisticated cousin to Fortnite. It just feels more like a serious game and the gameplay feels more connecting.",5.0),
 (4,23,"Lots of options","I have been playing this game since release, and I definitely enjoy it. The different characters that you could play as lets you modify how you play every time, from close-quarters fighting to long-range sniping.",4.0),
 (1,23,"Impressive","This game is pretty good imo. I love to play it with my friends on a friday night after a long week, and we have had some pretty impressive wins under our belt.",4.0),
 (2,24,"Worth the buy","Elden Ring. Where do I even begin with this masterpiece of a game. I was concerned with all the advertising with this game, worried that it was not gonna live up to the name it was making. But I can say for sure that it definitely did.",5.0),
 (3,24,"DOES IT END?","This game is incredible. Every moment you think that you have uncovered every part of the map, you realize that you have only explored the tip of the iceberg. I don't think anyone has explored all of the map yet.",5.0),
 (4,24,"So Expansive","I have been blown away by this game. While it can be difficult to traverse this ever-expanding map, the game makes up for it with beautiful sceneries and incredible visuals. I would recommend this game to anyone interested in exploring.",4.0),
 (1,25,"Pretty Good","GTA V has been out for a long time, and while it is a bit of a play-to-win game, there is a way to make serious bank without whipping out the wallet. One of the best ways that I have learned to make huge amounts of money is through the car import/export operation, as I am a pretty good driver.",4.0),
 (2,25,"Hate Griefers","GTA V is a pretty good game... so long as you can find a good lobby where some rich dude isn't using his billions of dollars in-game to nuke everyone or grief. And to do that, you sometimes have to do the old wifi trick to get yourself into a solo lobby.",3.0),
 (3,25,"Hard to Solo","Love the story, the various heists, and the overall gameplay. Just wish they made it easier to rank up and get lots of cash when you are only in a group of two or are alone.",4.0),
 (4,26,"Amazing","Rainbow Six Siege is amazing. I love playing as Doc or Tachanka, because then I can either heal or deal a lot.",5.0),
 (1,26,"Pay to Win","Siege is a pretty good game. The only issue that I have is that you need to pay real money basically to get all of the operators, or else it is a long time of grinding to get enough in-game currency to get them all.",3.0),
 (2,26,"Need more specials","I have really enjoyed playing this game. The specials that they occasionally do like the zombie mode really make for nice twists and good breaks from the pvp gameplay.",4.0),
 (3,27,"Alright","This game is a pretty good game. The graphics are a little bit better from last year's, but I feel like they have a long way to go in making it feel more realistic.",4.0),
 (4,27,"Breathtaking","Great game to play at home with the friends. I really have no words to describe the game.",5.0),
 (3,27,"OK","I really wonder how these games are able to make so much money from sales from these games. The only major changes that are made each year is the players.",3.0),
 (4,28,"Best. Game. Ever","Minecraft may be one of the best games to have come out of this century. The fact that it not only survives, but continues to thrive after 11 years highlights just how impressive of a game it is.",5.0),
 (1,28,"Incredible","This game is so amazing. It is definitely one of the games that you pick up, play through once, leave alone for a month, and then come back and wonder why you ever quit playing the game.",5.0),
 (2,28,"One of the Best","I don't think Mojang will ever make another game as impressive as Minecraft.",5.0),
 (5,29,"Very Good","Cars + Soccer... What could go wrong?",5.0),
 (1,29,"No More Casual","Rocket League is a really fun game to play. I am a little sad that they turned the custom arcade games into ranked, because now everyone plays them more seriously and gets angry when you don't play your hardest.",4.0),
 (2,29,"Super Impressive","This game is amazing. I love how each game mode (from 1v1 to 4v4) changes the aspect of the game and how to play, as you are forced to either play more aggressively and ball-chase more or anticipate shots and rely on teammates to back you up.",5.0),
 (3,30,"Alright","Fallout 4 was an alright game. With various side missions to keep you busy when you want to take a way from the main story, their is definitely something for you to work on in the game. Not to mention, the various items and weapons plus their mods allow for you to have a wide array of possibilities in how to play the game.",4.0),
 (4,30,"Kinda Confusing","The game was kinda confusing to play. With the ability to avoid the main quests for a long time, it was kind of hard to determine what order to play missions in.",3.0),
 (1,30,"Good Game","If you like the smell of radiation in the morning and the taste of cooked mutated wolf for dinner, this is for sure your game.",4.0);

INSERT INTO reviews (account_id,game_id,title,description,rating) VALUES 
 (5,31,"Alright","It's fun, but not my cup of tea.",3.0),
 (1,31,"New Characters!","I love the new characters! They all look so cool and I love unlocking them. Incereroar is my favorite pokemon and I love that I can play as Incineroar!",5.0),
 (2,31,"Nintendo nerfed my play style","Characters can no longer run through other characters and instead push them backward. This ruined characters like Fox by nerfing his slide kick attack and side special. UGH",2.0),
 (3,31,"Fun but expensive","New updates to Smash are great! The new graphics look amazing and the new characters are cool. Unfortunately, the game is missing Stage Builder and the For Glory Mode online. These were big parts of SSB4, and I am upset they aren't in there for the price.",4.0),
 (4,32,"Great Game, Bad for Household Playing","When purchasing, I did not know that every profile is on one island. I am one of 3 players on our Switch and I would've like to have a private island where only I work. My kids are ruining my island.",3.0),
 (1,32,"SO RELAXING","Collecting shells and apples is my favorite pass time. So calming to just walk around the island doing tasks! I also love designing.",4.0),
 (2,32,"Perfect Game","I love Animal Crossing!", "Being Tom Nooks lackey is a great time, love never being able to pay off my debt to him!",5.0),
 (3,32,"Beautiful but takes a long time","Takes a long time to progres, but it is overall really fun. Love the design aspec of the game, wish you could get to it sooner though.",4.0),
 (5,33,"World","Great game. I like big world.",5.0),
 (4,33,"Awesome","Possibly the best RPG ever sold. Absolutely love it. I spend a minimum of 13 hours playing it every day. I love the Zelda franchise and they've done it again.",5.0),
 (1,33,"Great but repetitive","So much to explore landscape-wise, love the new world. Wish they had spent more time on the story. Hundreds of seeds to collect by doing the same ten puzzles over and over and over. 120 shrines of unchallenging puzzles that take no more than a few minutes to figure out.",4.0),
 (2,33,"Mid at best","So far, I've put in 10 hours and I've had fun with it but I can't help but say 'where is the perfect game ppl have been claiming?' The graphics are ok. Yes, it has a decent open world but not this magical one I've been hearing about.",3.0),
 (5,34,"World","Great game. I like big world.",5.0),
 (3,34,"Storyline needs work","The game is fun and the story is remarkably simple. There isn't much of a challenge, I finished playing through the storyline in a single day. Wish there was more.",3.0),
 (4,34,"Absurdly Difficult","I got this for Christmas and I'm stuck. I cannot figure out how to beat this level and it's annoying. Also multiplayer kinda sucks. Wish more time was spent in development smh.",3.0),
 (1,34,"Good Game","I enjoyed the different game mechanics, levels, and art design. The game wasn't as challenging as I'd hoped. I really enjoyed finding all of the little easter eggs scattered throughout kingdoms.",4.0),
 (5,35,"World","Good game. I like smaller world.",5.0),
 (2,35,"Worth the money","This game was a gift for my cousin. He plays it constantly and his friends love that it's co-op. Guess who the cool cousing is now!",5.0),
 (3,35,"Cool!!!!","The ability to transform into cats and climb walls is so fun, and the graphics are incredible. The characters are so much fun and so are the storylines and backgrounds. A great game. The ending is difficult though.",4.0),
 (4,35,"Okay","Not as good as old Mario games. Never even finished it, I got bored right away, but it does have good graphics.",3.0),
 (1,36,"Way better than the original","This is a super-slick entry into the Metroid franchise that plays better than anything we've seen from the series so far. This is the comeback we have been dreaming about for years!",5.0),
 (2,36,"Near Perfect","This is a near-perfect game. The game never crashed during gameplay. I did not run into a single bug in my play-through. The movement sucked though. I absolutely did not like the double jump implementation here, weird timing window that is NOT intuitive.",4.0),
 (3,36,"Why all the praise?!!","I see a lot of the praise for this game and don’t know why people say they love the things I hate. It is extremely discouraging as a long-time fan. I love to explore. I like finding everything. This game leaves no room for that.",2.0),
 (5,37,"GOOIGI","I love Gooigi!",4.0),
 (4,37,"WOW","I have no idea what the people who are rating this game 1 and 2 stars are talking about! This is one of the best videogames I've ever played! Absolutely amazing! Graphics and story line are perfect!",5.0),
 (1,37,"Disappointment","I had alot of hopes when they announced Luigi Mansion 3 on the switch, thinking it would be closer to Luigi Mansion 1 since it was on a home console. While the game is indeed graphically beautiful, I felt like the game was bad, from beginning to end.",2.0),
 (2,37,"Great but has problems","The story was really good!! However, the ghosts are basically the ghosts from the second game with different names and colors. I was really disappointed with how similar the ghosts were. The bosses' mechanics were hard to understand and figure out, and some were too easy.",3.0),
 (5,38,"World","Good game. I make world.",4.0),
 (3,38,"Great","I've owned Mario maker 1, and wow, Mario maker 2 is 100 times better! I love the Koopalings in it, they add way more boss fight options to the game.",5.0),
 (4,38,"Addicting","This game is super addictive and fun to play on other courses and make your own! My only problems with it are: the intro is super uncomfortable and its laggy! It explains how to make courses in way too much detail and its hard to connect over the internet to play other people’s maps.",4.0),
 (1,38,"SO ANNOYING","This game is alright with the maker. Competitive is the problem. I don’t know if it’s just me. But the game has it down to a science of letting me lose. I am in S rank so I’m not bad. It’s just it feels like the game purposely put enemies EXACTLY WHERE I WILL LAND. So annoyed.",2.0),
 (2,39,"Perfection","I love being chased by pokémon!!! This is so much more immersive than the normal pokémon games! I love this game so much; easily the best purchase I’ve made.",5.0),
 (3,39,"Brilliant, Incredible, Amazing, Show-stopping, Spectacular, Never the same, Totally unique","I LOVE THIS GAME! Perfection. Gaga said it best. I love the new mechanics. This game is gorgeous. I love love love it.",5.0),
 (4,39,"It's Great!","This is a complete reshaping of the old and boring original Pokémon formula. Catching Pokémon is so satisfying.",5.0),
 (1,40,"So good!","This game is flawless in every shape and form. Despite the 10/10 and all the positive talk, this game is not for everyone but is absolutely the game to try if you're interested in getting into games that utilize the rouge lite system",5.0),
 (2,40,"Mediocre","It’s much too story-based for a 5. The gameplay is only there as a backdrop for the story which isn’t really anything special. While the gameplay is okay, the isometric style can get crowded.",3.0),
 (3,40,"Good","A decent game, the art style's aesthetically pleasing, and the portrayals of the gods/goddesses are nicely conveyed. Too much repetition for me to enjoy though. LOTS of grinding needed to succeed- not for me.",4.0);