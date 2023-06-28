import { combineReducers } from "@reduxjs/toolkit";
import { todoReducerActionType } from "../shared/types/reducer.type";
import { todoType } from "../shared/types/todo.type";

const initialState: { todos: todoType[] } = {
  todos: [
    {
      id: 0,
      completed: false,
      text: "Learn React",
    },
    {
      id: 1,
      completed: false,
      text: "Learn Redux",
    },
    {
      id: 2,
      completed: false,
      text: "Learn Redux Toolkit",
    },
  ],
};

export const todoReducer = (
  state = initialState,
  action: todoReducerActionType
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todo: todoReducer,
});
