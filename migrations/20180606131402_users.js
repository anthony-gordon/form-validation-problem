
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('email')
        table.string('password')
        table.string('colour')
        table.string('bear')
        table.string('tiger')
        table.string('snake')
        table.string('donkey')
        table.string('tigername')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};