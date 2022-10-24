import { View } from "react-native";
import { TodoItem } from "@/types/TodoItem";
import { EmptyList } from "@/components/widgets/molecules/EmptyList";
import { Task } from "../../molecules/Task";

type Props = {
  list: TodoItem[];
  toggle: (id: string) => void;
  remove: (id: string) => void;
};

export function TodoList({ list, remove, toggle }: Props) {
  const hasItems = list?.length;

  if (!hasItems) {
    return <EmptyList />;
  }

  return (
    <View>
      {list.map((item) => (
        <Task key={item.id} todo={item} remove={remove} toggle={toggle} />
      ))}
    </View>
  );
}
