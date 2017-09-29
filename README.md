# Draft Aid: Fantasy Hockey

Fantasy Hockey Draft Companion Application

### What is it?:

This is a tool to help you elevate your fantasy hockey drafting skills. It uses ranking information from [fantasypros.com](https://www.fantasypros.com/nhl/rankings/overall.php) to organize outstanding undrafted players. The 'draft' page of this application contains interactive tables that allow you to remove drafted players from the pool of overall players, and will provide you rankings for the rest of the undrafted players. There are tables for each of the fantasy positions: left wing, center, right wing, defense, and goalie. When a player is drafted, you click on their name in the table, and it will move them to the drafted players table. Use this to help you choose your next pick!

### TODO:
1. Fix the way the app works ... right now you have to click the select box to highlight, and then double click that box to increase the global pick number. Also, in order to load the listConfig you have to input an action first ... for example double click doesn't work right away, you need to hit a select box and then you can start double clicking.
2. Fix the layouts for non-large screen sizes
3. Add a spinner to display while data is loading
4. Add ability to remove players from the lists (currently functionality is done by highlighting drafted players)
5. Add search & filter & sorting functionality to the lists
6. Add a team view

### How To Launch The Application Locally:

#### Installation:

	- npm install	
	- npm install -g bower	
	- bower install	
	- npm install -g grunt-cli
	
	Install Sass/Compass (may need to use sudo)
	- npm install -g compass
	- gem install sass
	- gem install compass

#### Running:

	- grunt server (may require --force)
	- the application will be visible at localhost:8080

### Contributing:

Running into problems with this application? Want to see a feature implemented? Want to add a feature to the application? Feel free to open an issue or a PR, and I'll try my best to take a look at it in a timely manner.

### Shout-outs
- Thank you to JayZheng for creating the draftaid-react application for fantasy football. 
- - Check it out at [https://github.com/jayjzheng/draftaid-react]()
- Thank you to the Angular-PatternFly team (& Jeff Phillips) for the seed application that I based this project on
- - Check it out at [https://github.com/patternfly/angular-patternfly-demo-app]() 
