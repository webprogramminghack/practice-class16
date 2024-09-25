type Todo = {
  title: string;
  dueDate: string | Date;
  isComplete: boolean;
};

const todo: Todo = {
  title: 'Buy milk',
  dueDate: new Date(),
  isComplete: true,
};

todo.dueDate.getDate();

const todo2 = {
  title: 'Buy milk',
  dueDate: new Date(),
  isComplete: true,
} satisfies Todo;

todo2.dueDate.getDate();
