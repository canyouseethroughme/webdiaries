exports.up = function (knex) {
  return knex.schema.createTable("diaries", (table) => {
    table.increments("id");
    table.string("title").notNullable();
    table.text("text", "longtext");
    table.boolean("favorite");
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("diaries");
};
