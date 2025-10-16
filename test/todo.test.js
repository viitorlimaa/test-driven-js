const { describe, it, before } = require("mocha");
const { expect } = require("chai");
const Todo = require("../src/todo");

describe("todo", () => {
  
  describe("#isValid", () => {
    it("should return invalid when creating an object without text", () => {
      const data = {
        text: "",
        when: new Date("2025-03-20"),
      };
      const todo = new Todo(data);
      const result = todo.isValid();
      expect(result).to.be.not.ok;
    });

    it('should return invalid when creating an object using the "when" property invalid', () => {
      const data = {
        text: "info",
        when: new Date("20-03-20"),
      };
      const todo = new Todo(data);
      const result = todo.isValid();
      expect(result).to.be.not.ok;
    });
   
    it(
      'should have "id", "text", "when" and "status" properties after create objects', () => {
        const data = {
            text: "info",
            when: new Date("2025-03-20"),
          };
          const todo = new Todo(data);
          const result = todo.isValid();
          expect(result).to.be.ok;
      }
    );
  });
});
