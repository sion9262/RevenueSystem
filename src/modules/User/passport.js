const LOGIN = 'passport/LOGIN';
const LOGOUT = 'passport/LOGOUT';

export const login = () => ({ type : LOGIN });
export const logout = () => ({ type : LOGOUT });

const initialState = {
    checkLogin : false,
    jwt : ''
};

const passport = (state = initialState, action) => {
    switch (action.tpye){
        case LOGIN:
            state.checkLogin = true;
            return state.checkLogin;
        case LOGOUT:
            state.checkLogin = false;
            return state.checkLogin;
        default:
            return state;
    }

};
export default passport;