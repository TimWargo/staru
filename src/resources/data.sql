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
 (10,1), (10,6);

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