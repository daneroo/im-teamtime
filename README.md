# iMetrical TeamTime - concept

[ ![Codeship Status for daneroo/im-teamtime](https://www.codeship.io/projects/2ac0d0a0-21dd-0132-e8f5-6a1232367835/status)](https://www.codeship.io/projects/36365)

Before I dive into iconic, famo.us or meteor. let's give this a spin.

This repo is deployed to [im-teamtime.divshot.io](http://development.im-teamtime.divshot.io/) on [divshot](https://divshot.com/) by [codeship](https://www.codeship.io), for continuous integration.


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

    mkdir im-teamtime
    cd im-teamtime
    yo cg-angular

The generator asks a few questions, these are the answers I gave:

    module name: teamtime
    which router: angular-ui
