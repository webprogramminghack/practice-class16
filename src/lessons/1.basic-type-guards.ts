type Todo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {
  console.log(todo.dueDate);

  // todo.dueDate.getDate();

  // if (todo.dueDate instanceof Date) {
  //   console.log(todo.dueDate);

  //   console.log(todo.dueDate.getDate());
  // } else {
  //   console.log(todo.dueDate);
  // }

  if (todo.dueDate instanceof Date) {
    console.log(todo.dueDate);
    return;
  }

  console.log(todo.dueDate);
}

function getDescriptionLength(todo: Todo) {
  // todo.description.length;

  if (todo.description) {
    return todo.description.length;
  }

  return todo.description?.length;
}

type ErrorResponse = {
  error: Error;
  message: string;
};

type SuccessResponse = {
  data: any;
};

type Response = ErrorResponse | SuccessResponse;

function handleResponse(response: Response) {
  if ('error' in response) {
    console.log(response.error);
    console.log(response.message);
  } else {
    console.log(response.data);
  }
}

type SuccessState = {
  status: 'success';
  data: any;
};

type ErrorState = {
  status: 'error';
  error: Error;
};

type State = SuccessState | ErrorState;

function handleState(state: State) {
  if (state.status === 'success') {
    console.log(state.data);
  } else {
    console.log(state.error);
  }
}

function handleItems(items: string[] | string) {
  if (Array.isArray(items)) {
    console.log(items);
  } else {
    console.log(items);
  }
}
