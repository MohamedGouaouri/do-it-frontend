
interface AuthState {
    isAuthenticated: Boolean
    userName: string
}

interface Action {
    type: string,
    payload: any
}

const initialState: AuthState = {
    isAuthenticated: true,
    userName: "Mohammed"
}

export const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
    return state
}
