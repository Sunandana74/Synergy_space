import { createAuthSlice } from "./slices/authSlice.js";
import {create} from "zustand";
import { createChatSlice } from "./slices/chatSlice.js";


export const useAppStore = create()((...a) => ({
    ...createAuthSlice(...a),
    ...createChatSlice(...a),
}));