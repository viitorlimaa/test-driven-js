const uuid = require("uuid");

class Todo {
  
  constructor({ text, when }) {
    this.text = text;
    this.when = new Date(when);

    this.status = "";
    this.id = uuid.v4();
  }

  isValid() {
    return !!this.text && !isNaN(this.when.valueOf());
  }
}

module.exports = Todo;
