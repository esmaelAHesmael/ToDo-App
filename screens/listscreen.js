import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask, renameTask } from "../redux/todoReducer";

const TodoScreen = () => {
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddOrRename = () => {
    if (!task) return;

    if (editingId) {
      dispatch(renameTask({ id: editingId, newTitle: task }));
      setEditingId(null);
    } else {
      dispatch(addTask(task));
    }

    setTask("");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Todo List</Text>

      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />

      <TouchableOpacity
        onPress={handleAddOrRename}
        style={{ backgroundColor: "green", padding: 15 }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          {editingId ? "Rename Task" : "Add Task"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setTask(item.title);
              setEditingId(item.id);
            }}
            style={{
              padding: 15,
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TodoScreen;