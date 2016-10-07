# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* This project should be used as a foundation for every Nightlife AngularJS 1.5x project. It contains a framework for bundling (Webpack), unit testing (Karma and Jasmine), Typescript, and a skeleton single-page webapp using Angular UI-router.

### How do I get set up? ###

* To set up, do the following:

1. Install [NodeJS](https://nodejs.org/en/) (if you haven't done so already) (tested with 4.6.0 and 6.7.0)
2. Clone this repo into a directory where you want to create your application or component. 
3. In your project folder at the root level, type the following commands into your command line (if you haven't done so already):
   a) npm install -g typescript
   b) npm install -g karma-cli
   c) npm install -g webpack
   d) npm install -g typings (may be deprecated in the near future)
4. Run npm install in your project's root directory

* Configuration
See files in app\config to configure the URL end points for your particular project

* Dependencies
See set up steps

* How to run tests
Run karma start to run tests. See karma.conf.js for karma configuration

Karma will automatically detect changes in your code and run tests again (if auto-save in your IDE is enabled, otherwise it will happen on save)

* Deployment instructions
For development, type "npm run dev", "npm run dev_stable" or "npm run prod" then navigate to localhost:8080 in your browser.

This project by default makes use of module hot swapping, so any changes made to code will be instantly reflected in your browser. (after saving of files, enable auto-save in your chosen IDE/Editor for instant change recognition) 


### Who do I talk to? ###

* Repo owner or admin
Mark W
