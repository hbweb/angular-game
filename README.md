# Angular Game

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.1.0.

Hope it would help to get an idea how to get started with M.E.A.N Stack.

This project use Babel (Javascript compiler), Nodejs(Express) for server, AngularJS for frontend and MongoDB(Mongoose) for database.


## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

Alternatively, following the command line below in your Terminal

Run 


`npm install -g bower`
`npm install -g grunt-cli`
`npm install -g yo`
`npm install -g generator-angular-fullstack`


Create your project name 'hbweb-mean-tutorial'

`mkdir hbweb-mean-tutorial`
`cd hbweb-mean-tutorial`
`yo angular-fullstack hbweb-mean-tutorial`

You will need to choose number of options through the setup process. 
> Script with: Babel
> Markup with: HTML
> Stylesheet with: CSS
> Angular Router: uiRouter
> Bootstrap / Bootstrap UI : Yes
> MongoDB with Mongoose: Yes
> Authentication: No
> Socket.io: No (for now)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

