import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number | undefined) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const pushTodo = (
  id: number,
  title: string,
  userId: number | undefined,
) => {
  return client.post<Todo[]>(`/todos?userId=${userId}`, {
    id,
    createdAt: new Date(),
    userId,
    completed: false,
    title,
  });
};
