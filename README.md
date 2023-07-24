# Tech-Blog
This Application uses Model-View-Controller(MVC) paradigm to create a blog-style app where developers can create an account, edit their information, make or edit posts and comment on other users posts.

  ## Table of Contents
  * [installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Screenshots](#screenshots)
  * [URL](#url)
  * [Questions](#questions)
  
  ## Installation
1. Install node.js to run this application
2. Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't     tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
3. Make sure that your repo includes a package.json with the required dependencies. You can create one by running 4. npm init when you first set up the project, before installing any dependencies.
5. Run command npm npm install mysql2 to install mysql package to connect with database and perfrom queries.
6. Run command npm i sequelize to install sequelize package to connect to MYSQL database for Models.
7. Run command npm i express to create Express.js API for controller.
8. Run command npm i express-handlebars to install express-handlebars package to use Handlebars.js for Views.
9. Run command npm i dotenv to install dotenv package to use environment variables.
10. Run command npm i bcrypt to install bcrypt package to hash passwords.
11. Run command npm i express-session and npm i connect-session-sequelize to install packages to add authentication.
12. Create database and insert data.
13. Run command mysql -u root to be in mysql.
14. Run command source db/schema.sql .
15. Run command source node seeds/index.js.
16. The application will be invoked by using the following command: node server.js.This will start localhost server on PORT 3000.
Open browser and type http://localhost:3000 to run this application on your local machine.
17. This application is also deployed in heroku and can be accesed using following url 
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Screenshots
  ## URL
  ## Questions
