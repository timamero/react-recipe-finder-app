import { createContext } from "react";
import { auth } from "../firebase";

export const User = auth.currentUser
export const AuthContext = createContext(User)