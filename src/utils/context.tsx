import React, { useState, FC, createContext, ReactNode, useEffect } from 'react';

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export const TodoContext = createContext(null);

interface TodoProvider {
  children: ReactNode;
}

const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const todos = localStorage.getItem('todos');
    if (todos) {
      return JSON.parse(todos);
    } else {
      return [];
    }
  }
};

const TodoProvider: FC<TodoProvider> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[] | []>(getInitialState);
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
        setTodos([...todos]);
      }
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return <TodoContext.Provider value={{ todos, saveTodo, updateTodo } as any}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
