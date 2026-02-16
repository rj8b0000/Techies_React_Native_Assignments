import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTaskToList: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed;
        }
        return task;
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    },
  },
});
export const { addTaskToList, toggleTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
