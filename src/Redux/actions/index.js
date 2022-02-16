import * as ACTIONS from "../constants/action-types";

export const setNotifications = (payload) => {
    return { type: ACTIONS.SET_NOTIFICATIONS, payload };
}