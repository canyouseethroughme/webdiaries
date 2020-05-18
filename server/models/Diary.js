const { Model } = require("objection");

class Diary extends Model {
  static get tableName() {
    return "diaries";
  }
}

module.exports = Diary;
