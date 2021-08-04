'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      title: 'Hello World',
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      tags: 'hello,world'
    }, {
      title: 'Lorem Ipsum',
      content: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: 'lorem,ipsum'
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};



// command to create -> npx sequelize-cli seed:generate --name dummy-posts
