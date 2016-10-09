'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './games.routes';

export class GamesComponent {

  allGames = [];
  errorNewGame = '';

  /*@ngInject*/
  constructor($http, $scope) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/games')
      .then(response => {
        this.allGames = response.data;
      });
  }

  // Function to add a new game
  addNewGame() {
    this.$http.post('/api/games', this.newGame).then( success => {
        console.log('Adding new a record');
        console.log(this.newGame);
        this.allGames.push(success.data); // Push new game object into allGames array.
        this.newGame = {};  // Blank out new game object to clear the form

      }, error => {
        console.log('Fail to add new record .. Somthing went wrong!' + error.data);
        this.errorNewGame = error.data;
      })
  }

  // Function to delete a game
  removeGame(index) {
    this.$http.delete('/api/games/' + this.allGames[index]._id).then(  success => {
      // Delete ok
      
      // Now remove the deleted game out of allGames object
      this.allGames.splice(index, 1);
    }, error => {
      // Unable to delete this game
      console.log('Fail to delete the game... Somthing went wrong!' + error.data);
    })
  }

}

export default angular.module('meanGameApp.games', [uiRouter])
  .config(routes)
  .component('games', {
    template: require('./games.html'),
    controller: GamesComponent,
    controllerAs: 'gamesCtrl'
  })
  .name;
