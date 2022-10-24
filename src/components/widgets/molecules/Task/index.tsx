import Checkbox from "@/assets/icons/Checkbox";
import CheckboxFilled from "@/assets/icons/CheckboxFilled";
import { TodoItem } from "@/types/TodoItem";
import { Trash } from "phosphor-react-native";
import { Alert, Text, TouchableOpacity, View } from "react-native";

type Props = {
  todo: TodoItem;
  toggle: (id: string) => void;
  remove: (id: string) => void;
};

export function Task({ todo, toggle, remove }: Props) {
  const { completed, content, id } = todo;

  function handleToggle() {
    toggle(id);
  }

  function handleDelete() {
    Alert.alert("Atenção!", `Deseja excluir o item "${content}"`, [
      {
        text: "Sim",
        onPress: () => remove(id),
      },
      { text: "Não" },
    ]);
  }

  return (
    <View className="mb-2 h-16 flex-row  items-center justify-between rounded-lg border border-gray-500 bg-gray-400 p-3">
      <View className="mr-2 flex-1 flex-row items-center gap-2">
        <TouchableOpacity onPress={handleToggle}>
          {completed ? <CheckboxFilled /> : <Checkbox />}
        </TouchableOpacity>

        <Text
          className={`flex-1 text-gray-100 transition ${
            completed ? "text-gray-300 line-through" : ""
          }`}
        >
          {content}
        </Text>
      </View>

      <TouchableOpacity
        className="h-8 w-8 items-center justify-center"
        activeOpacity={0.7}
        onPress={handleDelete}
      >
        <Trash color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
