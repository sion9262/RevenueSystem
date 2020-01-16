import { combineReducers } from 'redux'; // 여러 리덕스를 합쳐주는 함수
import passport from './User/passport.js'
// 여기에 불러온 리덕스를 넣어주면 된다.
const rootReducer = combineReducers({
    passport
});

export default rootReducer;