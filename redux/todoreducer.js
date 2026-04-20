import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now().toString(),
        title: action.payload,
      });
    },
    renameTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        task.title = newTitle;
      }
    },
  },
});

export const { addTask, renameTask } = todoSlice.actions;
export default todoSlice.reducer;
