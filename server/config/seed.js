/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import Game from '../api/game/game.model';

Game.find({}).remove()
  .then(() => {
    Game.create({
      name: 'Fila 17',
      platform: 'Xbox One',
      gerne:'Sport',
      condition:'new'
    }, {
      name: 'Fila 16',
      platform: 'Xbox One',
      gerne:'Sport',
      condition:'old'
    }, {
      name: 'Fallout 4',
      platform: 'Playstation 4',
      gerne:'Role-Playing',
      condition:'new'
    }, {
      name: 'Call of Duty',
      platform: 'Playstation 4',
      gerne:'Role-Playing',
      condition:'new'
    }, {
      name: 'Gears of War 4',
      platform: 'Wii',
      gerne:'Role-Playing',
      condition:'new'
    }, {
      name: 'Wii Sport',
      platform: 'Wii Sport',
      gerne:'Role-Playing',
      condition:'new'
    });
  });

