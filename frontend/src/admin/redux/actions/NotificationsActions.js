export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const showNotification = (message, type) => ({
    type: SHOW_NOTIFICATION,
    payload: { message, type }
});
export const hideNotification = () => ({
    type: HIDE_NOTIFICATION
});
