import { useEffect, useState } from "react";
import { View } from "react-native";

import { Form } from "@/components/widgets/molecules/Form";
import { Header } from "@/components/widgets/organisms/Header";
import { ListInfo } from "@/components/widgets/molecules/ListInfo";
import { TodoList } from "@/components/widgets/organisms/TodoList";
import { TodoItem } from "@/types/TodoItem";

export default function Home() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    setCompletedTodos(todoList.filter((todo) => todo.completed));
  }, [todoList]);

  function addTodo(newTodo: TodoItem) {
    setTodoList((state) => [newTodo, ...state]);
  }

  function toggleTodo(targetTodoId: string) {
    setTodoList((state) =>
      state.map((item) => {
        if (item.id === targetTodoId) {
          return { ...item, completed: !item.completed };
        }

        return item;
      })
    );
  }

  function removeTodo(idToRemove: string) {
    setTodoList((state) => state.filter((item) => item.id !== idToRemove));
  }

  return (
    <View className="flex-1  px-6">
      <Header />
      <Form add={addTodo} />

      <ListInfo completed={completedTodos.length} created={todoList.length} />
      <TodoList list={todoList} remove={removeTodo} toggle={toggleTodo} />
    </View>
  );
}
