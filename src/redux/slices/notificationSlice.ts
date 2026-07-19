import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NotificationState, Notification } from '../../types';

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Omit<Notification, 'id' | 'timestamp'>>) {
      state.notifications.push({
        ...action.payload,
        id: Math.random().toString(36).slice(2),
        timestamp: Date.now(),
      });
    },
    removeNotification(state, action: PayloadAction<string>) {
      state.notifications = state.notifications.filter((n) => n.id !== action.payload);
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
