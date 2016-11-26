exports.seed = function(knex, Promise) {

  return knex('waterData').del()
    .then(function () {
      return Promise.all([
        knex('waterData').insert({location: 'WaikanaeRiver', collector: 'girlGuides', date: "27112016", dissolvedOxygen: "92% Sat", BOD: "4ppm", coliformBacteria: "negative", pH: 7, temperatureChange:"3-5°C", nitrate: "20ppm", phosphate: "2ppm", turbidity: "30 JTU" }),

        knex('waterData').insert({location: 'HuttRiver', collector: 'Scouts', date: "24112016", dissolvedOxygen: "56% Sat", BOD: "8ppm", coliformBacteria: "negative", pH: 5, temperatureChange:"6-10°C", nitrate: "20ppm", phosphate: "1ppm", turbidity: "40 JTU" }),

        knex('waterData').insert({location: 'ŌtakiGorge', collector: 'VUWTC', date: "19102016", dissolvedOxygen: "80% Sat", BOD: "4ppm", coliformBacteria: "positive", pH: 10, temperatureChange:"3-5°C", nitrate: "40ppm", phosphate: "4ppm", turbidity: "60 JTU" })
      ]);
    });
};
