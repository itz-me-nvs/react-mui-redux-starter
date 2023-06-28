let nextTodoId = 0;

export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const addTodo = (text: string) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: nextTodoId++,
      text,
    },
  };
};

export const removeTodo = (id: number) => {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
};
