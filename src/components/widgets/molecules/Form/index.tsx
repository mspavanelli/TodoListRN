import { TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "phosphor-react-native";
import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

type Props = {
  add: (todo: TodoItem) => void;
};

export function Form({ add }: Props) {
  const [newTodo, setNewTodo] = useState<string>("");

  function handleAddTodo() {
    if (!newTodo) return;

    const todo: TodoItem = {
      completed: false,
      content: newTodo,
      id: new Date().toISOString(),
    };

    add(todo);
    setNewTodo("");
  }

  return (
    <View className="mb-8 flex-row gap-1">
      <TextInput
        className="h-14 flex-1 rounded bg-gray-500 p-4 text-gray-100"
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={newTodo}
        onChangeText={(value) => setNewTodo(value)}
      />
      <TouchableOpacity
        className="w-14 items-center justify-center rounded bg-blue-dark transition active:bg-blue"
        activeOpacity={1}
        onPress={handleAddTodo}
      >
        <PlusCircle color="#F2F2F2" weight="bold" />
      </TouchableOpacity>
    </View>
  );
}
