
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'anthonylebrungordon@gmail.com', password: 'hello123', colour: 'Blue', bear: 'selected', tiger: 'selected', snake: 'selected', donkey: '', tigername: 'Tigger'},
      ]);
    });
};
