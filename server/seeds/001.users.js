exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "andrei",
          first_name: "andrei",
          last_name: "stefan",
          email: "admin@admin.com",
          password:
            "$2b$10$f6x2AFyhLUend3iOOC.jxejZHEPI1A4Qz0g9N0Ixcs5iZFZA/ZGHu",
        },
        {
          username: "alin",
          first_name: "alin",
          last_name: "george",
          email: "user@user.com",
          password:
            "$2b$10$f6x2AFyhLUend3iOOC.jxejZHEPI1A4Qz0g9N0Ixcs5iZFZA/ZGHu",
        },
      ]);
    });
};
