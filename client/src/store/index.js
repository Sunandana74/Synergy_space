import { createAuthSlice } from "./slices/authSlice.js";
import {create} from "zustand";
import { createChatSlice } from "./slices/chatSlice.js";
import {persist} from "zustand/middleware";

export const useAppStore = create(persist((...a) => ({
    ...createAuthSlice(...a),
    ...createChatSlice(...a),
})));