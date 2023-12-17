import {createContext} from 'react';

type User = {
  id: string
  login: string
}

type AuthContextType = {
  user: User | null
  setUser: (user: User | null) => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: ()=>null
})