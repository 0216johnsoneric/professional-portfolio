# Portfolio-Website
Eric Johnson's personalized Website displays portfolio projects, skills, and other materials:
* An updated portfolio featuring projects.
* An updated GitHub profile with pinned repositories featuring for projects.
* A updated Resume
* A updated LinkedIn profile

1) Github Pages: https://0216johnsoneric.github.io/Portfolio-Website/
or deploy on 
2) Heroku:  https://eric-j-portfolio-website.herokuapp.com/#home

Instructions:
1) Clone lab: git clone git@github.com:0216johnsoneric/Portfolio-Website.git
2) Run in Browser w/ localhost or VS code browser extension

<img src="assets/images/Screen Shot 2020-09-29 at 8.21.04 PM.png"> </img>


Steps for Deploying Static pages on Heroku:
1) Add a file called composer.json to the root directory by running touch composer.json
2) Add a file called index.php to the root directory by running touch index.php
3) Rename the homepage (e.g. index.html) to home.html
4) In index.php, add the following line: <?php include_once("home.html"); ?>
5) In composer.json, add the following line: {}
6) Run git push heroku master








