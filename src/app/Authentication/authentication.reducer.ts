import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './authentication.actions';

export interface State {
    isAuthenticated: boolean;
}

const initialState: State = {
    isAuthenticated: false
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                isAuthenticated: true
            }
        case SET_UNAUTHENTICATED:
            return {
                isAuthenticated: false
            }
        default: {
            return state
        }
    }
}
export const getIsAuth = (state: State) => state.isAuthenticated;