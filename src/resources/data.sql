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
);

CREATE TABLE genres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

CREATE TABLE game_genres (
    game_id INT NOT NULL REFERENCES games(id),
    genre_id INT NOT NULL, REFERENCES genres(id),
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