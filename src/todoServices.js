class TodoServices {
  constructor({ todoRepository }) {
    this.todoRepository = todoRepository;
  }

  create(todoItem) {
    if (!todoItem.isValid()) {
      return {
        error: {
          message: "invalid data",
          data: todoItem,
        },
      };
    }

    const whenDate = new Date(todoItem.when); // 👈 conversão crucial
    const today = new Date();

    const todo = {
      ...todoItem,
      status: whenDate > today ? "pending" : "late",
    };

    return this.todoRepository.create(todo);
  }

  list(query) {
    return this.todoRepository
      .list()
      .map(({ meta, $loki, ...result }) => result);
  }
}

module.exports = TodoServices;
