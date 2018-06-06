
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('email')
        table.string('password')
        table.string('colour')
        table.string('firstanimal')
        table.string('secondanimal')
        table.string('tigername')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};