import { Text, View } from "react-native";

type Props = {
  created: number;
  completed: number;
};

export function ListInfo({ completed, created }: Props) {
  return (
    <View className="mb-5 flex-row justify-between">
      <View className="flex-row items-center gap-2">
        <Text className="font-bold text-blue">Criadas</Text>
        <View className="min-w-[28px]  rounded-2xl bg-gray-400 py-1 px-2">
          <Text className="text-center text-sm font-bold text-gray-100">
            {created || 0}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center gap-2">
        <Text className="font-bold text-purple">Concluídas</Text>
        <View className="min-w-[28px]  rounded-2xl bg-gray-400 py-1 px-2">
          <Text className="text-center text-sm font-bold text-gray-100">
            {completed || 0}
          </Text>
        </View>
      </View>
    </View>
  );
}
