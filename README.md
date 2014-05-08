# iMetrical TeamTime - concept

Before I dive into iconic, famo.us or meteor. let's give this a spin


## Grunt Tasks

    grunt serve   #This will run a development server with watch & livereload enabled.
    grunt test    #Run unit tests.
    grunt build   #Places a fully optimized (minified, concatenated, and more) in /dist

## Adding components
This is how we use the gererator to add components;

    yo cg-angular:partial mypartial
    yo cg-angular:service myservice

## Initial Setup
We are using a yeoman generated (scaffolded) project. Using [cg-angular](https://github.com/cgross/generator-cg-angular).

Requirements and dependancies:

    sudo npm install -g grunt-cli yo bower
    sudo npm install -g generator-cg-angular
    # might also want to update these if already installed
    sudo npm update -g grunt-cli yo bower generator-cg-angular

Actual generation of code:

    mkdir ng-asterix
    cd ng-asterix/
    yo cg-angular

The generator asks a few questions, these are the answers I gave:

    module name: teamtime
    which router: angular-ui
