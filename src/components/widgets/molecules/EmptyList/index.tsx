import { Text, View } from "react-native";
import Clipboard from "@/assets/icons/Clipboard";

export function EmptyList() {
  return (
    <View className="items-center gap-y-1 border-t border-gray-400 pt-12">
      <Clipboard className="mb-4" />
      <Text className=" font-bold text-gray-300">
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text className="text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
