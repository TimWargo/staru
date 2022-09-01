# About StarU

StarU is a game review website where users can lookup reviews about top games accross various platforms, including Xbox, PlayStation, PC, and Nintendo Switch. Furthermore, users can create an account to leave their own review of the website, as well as give the game a score out of five stars. The inspiration behind StarU is that there are many current game review websites, but none that allow users to create their own reviews of the games.

## Technologies used in StarU

At the core of StarU, it was build using HTML, CSS, JavaScript, MySQL, and PHP. In addition, StarU was built using the React JavaScript library to allow for a more professional and efficient web-based application. Furthermore, the project has been flavored with React Bootstrap and Bootstrap 5 to allow for a more uniform and convenient styling. Lastly, Axios was used to handle requests to and from the database. As such, the installation and start-up process will be different.

## Installing StarU and Setting It Up

To install and set up StarU, please do the following:
First, make sure that you have a working version of XAMPP, and that you can start Apache and MySQL.
Then, procede to the GitHub Repository (https://github.com/TimWargo/staru) to copy the source code of StarU. This can be done in two ways: (1) Using Git or (2) by downloading a ZIP file of the source code.

### Using Git
With a working Git installation, open the command line and type the following command into the directory in which you would like the source code to be copied:  
```$ git clone https://github.com/TimWargo/staru.git```

### ZIP Download
If you would prefer to download the source code without using Git, access the GitHub Repository. From here, click on the green "Code" dropdown in the top right hand corner. Then, click the "Download ZIP" button. The StarU ZIP file will now be in your downloads. Unzip the file and move it into a directory of your choosing.

### Installing required dependencies
Since StarU was created with React, you must have a version of Node.js. If you do not have Node.js installed, you can download it here: https://nodejs.org/en/download/. Once you have Node.js installed, go into the project directory of StarU (.../staru) and type ```npm install``` to install the dependencies needed to run the application.

### Moving StarU into the appropriate location
StarU was designed to work with XAMPP. Therefore, the source code of the project must be located under the subdirectory htdocs inside the xampp folder. Therefore, make sure that staru is placed directly inside the htdocs folder (i.e. xampp/htdocs/staru).

### Setting up the database
Now that you have the source code, it is now time to set up the database. Begin by booting up the Apache Web Server and MySQL database within XAMPP. Then, procede to localhost/phpmyadmin. From there, open a SQL script and copy the commands found in the data.sql file under src/resources.

## Update the .ini Files
Under '\xampp\sendmail\sendmail.ini', change the following items (an example sendmail.ini has been provided with the project):  
```smtp_server=smtp.gmail.com```,  
```smtp_port=465```,  
```smtp_ssl=ssl```,  
```auth_username=staru4300@gmail.com```,  
```auth_password=staru1023```.  

Under '\xampp\php\php.ini', change the following items under [mail function] (an example php.ini has been provided with the project):  
```; SMTP=localhost```,  
```; smtp_port=25```,  
```sendmail_from = staru4300@gmail.com```,  
```sendmail_path = "(your_path)\xampp\sendmail\sendmail.exe -t"```.  

## Starting StarU
Once you are inside the project directory (staru/), type ```npm start```.  
