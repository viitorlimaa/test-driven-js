const { describe, it, before, afterEach } = require("mocha");
const { expect } = require("chai");
const TodoRepository = require("../src/todoRepository.js");
const { createSandbox, useFakeTimers, replaceGetter } = require("sinon");
const TodoServices = require("../src/todoServices.js");
const Todo = require("../src/todo.js");

describe("todoServices", () => {
  let sandbox;

  before(() => {
    sandbox = createSandbox();
  });

  describe("#list", () => {
    const mockDatabase = [
      {
        name: "Vitor",
        age: 20,
        meta: { revision: 0, created: 1742576893414, version: 0 },
        $loki: 1,
      },
    ];
    let todoServices;

    beforeEach(() => {
      const dependencies = {
        todoRepository: {
          list: sandbox.stub().returns(mockDatabase),
        },
      };
      todoServices = new TodoServices(dependencies);
    });
    it("should return data on specific format", () => {
      const result = todoServices.list();
      const [{ meta, $loki, ...expected }] = mockDatabase;
      expect(result).to.be.deep.equal([expected]);
    });
  });

  describe("#create", () => {
    let todoServices;

    beforeEach(() => {
      const dependencies = {
        todoRepository: {
          create: sandbox.stub().returns(true),
        },
      };
      todoServices = new TodoServices(dependencies);
    });

    it("shouldn't save todo item with invalid data", () => {
      const data = new Todo({
        text: "",
        when: "",
      });
      Reflect.deleteProperty(data, "id");
      const expected = {
        error: {
          message: "invalid data",
          data: data,
        },
      };
      const result = todoServices.create(data);
      expect(result).to.be.deep.equal(expected);
    });

    it("should save todo item with late status when the property is further than today", () => {
      const properties = {
        text: "I must walk my dog",
        when: "2025-03-24 14:00:00 GMT-0",
      };

      const expectedId = "00001";

      const uuid = require("uuid");
      sandbox.stub(uuid, "v4").returns(expectedId);
      const data = new Todo(properties);
      const today = new Date("2025-10-16");
      sandbox.useFakeTimers(today);

      todoServices.create(data);
      console.log("isValid?", data.isValid());

      console.log(todoServices.todoRepository.create.firstCall.args[0]);

      const expectedCallWith = {
        ...data,
        status: "late",
      };

      expect(
        todoServices.todoRepository.create.calledOnceWithExactly(
          expectedCallWith
        )
      ).to.be.ok;
    });

    it("should save todo item with pending status", () => {});
  });
});
