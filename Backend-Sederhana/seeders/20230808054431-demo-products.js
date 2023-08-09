'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * 
     * }], {});
    */

    const data = [
      {
         name: 'Mozza Hot Dog',
         description: 'Generously top the cooked hot dog and toasted bun with marinara sauce. The bun will soak up the sauce, so you really want to cram as much of it on there as will fit. Then layer three slices of mozzarella cheese on top, and broil until bubbly.',
         image: 'https://muchbutter.com/wp-content/uploads/2021/09/139-Much-Butter-Hotang-Korean-Hot-Dog-23.jpg',
         stock: 4,
         price: 13000,
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
         name: 'Mozza Hot Dog',
         description: 'Generously top the cooked hot dog and toasted bun with marinara sauce. The bun will soak up the sauce, so you really want to cram as much of it on there as will fit. Then layer three slices of mozzarella cheese on top, and broil until bubbly.',
         image: 'https://twoplaidaprons.com/wp-content/uploads/2021/01/Korean-cheese-corn-dogs-angled-view-of-fried-corn-dogs-on-a-plate-with-ketcup-and-mustard.jpg',
         stock: 4,
         price: 14000,
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
         name: 'American Corn Dog',
         description: 'A corn dog is a sausage (usually a hot dog) that has been skewered, coated in a cornmeal batter, and deep-fried',
         image: 'https://natashaskitchen.com/wp-content/uploads/2020/10/Corn-Dogs-11.jpg',
         stock: 3,
         price: 15000,
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
         name: 'Mozza Choco',
         description: 'Corndog dibalut cokelat tebal yang sangat renyah saat digigit. Apalagi ada keju mozzarella yang mulur creamy gurih yang mengiringinya. Rasanya manis dan gurih beradu dalam tiap gigitan. Tak heran kalau corndog ini jadi favorit.',
         image: 'https://akcdn.detik.net.id/community/media/visual/2021/03/12/ada-15-jenis-corndog-hotdog-khas-korea-di-tempat-ini.jpeg',
         stock: 5,
         price: 11000,
         createdAt: new Date(),
         updatedAt: new Date(),
      },
      {
         name: 'Mozarella Corn Dog',
         description: 'Korean Mozzarella Corn Dog is a Korean-style corndog that is coated in batter & breadcrumb and then deep-fried in oil. It is a popular Korean street food that is delicious, cheesy, and crunchy.',
         image: 'https://theodehlicious.com/wp-content/uploads/2021/06/Korean-dog.jpg',
         stock: 3,
         price: 11000,
         createdAt: new Date(),
         updatedAt: new Date(),
      }
    ]

    return queryInterface.bulkInsert('Products', data)
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
      return queryInterface.bulkDelete('Products', null, {});
  }
};
