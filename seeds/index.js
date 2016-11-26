exports.seed = function(knex, Promise) {

  return knex('waterData').del()
    .then(function () {
      return Promise.all([
        knex('waterData').insert({location:'Hutt River', date: '26/11/16', image: 'https://ewtfloatingwetlands.files.wordpress.com/2012/05/img_0381.jpg' comment: 'the water was really dirty today'}),

        knex('waterData').insert({location: 'Waikanae River', date: '24/11/16', image:'https://ewtfloatingwetlands.files.wordpress.com/2012/05/img_0381.jpg', comment: 'water seemed clean'})
      ]);
    });
};
