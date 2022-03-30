# About StarU

StarU is a game review website where users can lookup reviews about top games accross various platforms, including Xbox, PlayStation, PC, and Nintendo Switch. Furthermore, users can create an account to leave their own review of the website, as well as give the game a score out of five stars. The inspiration behind StarU is that there are many current game review websites, but none that allow users to create their own reviews of the games.

## Technologies used in StarU

At the core of StarU, it was build using HTML, CSS, JavaScript, MySQL, and PHP. In addition, StarU was built using the React JavaScript library to allow for a more professional and efficient web-based application. Furthermore, the project has been flavored with React Bootstrap to allow for a more uniform and convenient styling. As such, the installation and start-up process will be different.

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
Additionally type ```npm install axios```.

### Moving StarU into the appropriate location
StarU was designed to work with XAMPP. Therefore, the source code of the project must be located under the subdirectory htdocs inside the xampp folder. Therefore, make sure that staru is placed directly inside the htdocs folder (i.e. xampp/htdocs/staru).

### Setting up the database
Now that you have the source code, it is now time to set up the database. Begin by booting up the Apache Web Server and MySQL database within XAMPP. Then, procede to localhost/phpmyadmin. From there, create a new database called staru and enter the following commands:
```sql
CREATE DATABASE staru;
```
```sql
USE DATABASE staru;
```
Then, create the database tables with the following commands, in order.
```sql
CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    screen_name VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    vkey VARCHAR(255),
    valid tinyint(1)
);
```
## Replacing .ini Files
To allow for PHP sendmail to access gmail, replace the current file at '\xampp\sendmail\sendmail.ini' with '\staru\sendmail-replace-sendmail-ini.ini' AND                       
replace the file '\xampp\php\php.ini' with '\staru\php-replace-sendmail-ini.ini'

## Update the .ini Files
Under '\xampp\sendmail\sendmail.ini', change the following items:
```smtp_server=smtp.gmail.com```
```smtp_port=465```
```smtp_ssl=ssl```
```auth_username=staru4300@gmail.com```
```auth_password=staru1023```

Under '\xampp\php\php.ini', change the following items under [mail function]:
```; SMTP=localhost```
```; smtp_port=25```
```sendmail_from = staru4300@gmail.com```
```sendmail_path = "(your_path)\xampp\sendmail\sendmail.exe -t"```

## Starting StarU
Once you are inside the project directory (staru/), type ```npm start```.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
