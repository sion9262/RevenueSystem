import React, {useState} from 'react';
import AuthForm from 'views/Passport/AuthForm.js';
const Auth = () => {

    const [mode, setMode] = useState('login');

    const handleLogin = (userID) => {
    
        window.sessionStorage.setItem('id', userID);
        
    }
    const authButton = () => {
        if (mode == 'login'){
            return(
                <div>
                    <button onClick={handleLogin(form.userID)}>로그인</button>
                </div>
            )
            
        }else if(mode == 'register'){
            return(
                <div>
                    <button>회원가입</button>
                </div>
            )
        }else {
            return(
                <div>
                    <h2>404</h2>
                </div>
            )
        }
    }
    const handleMode = () => {
        if (mode == 'login') {
            setMode('register');
        }else {
            setMode('login');
        }
    }
    const authChangeButton = () =>{

        if (mode == 'login'){
            return(
                <div>
                    <button onClick={handleMode}>회원가입 하러 가기</button>
                </div>
            )
            
        }else{
            return(
                <div>
                    <button onClick={handleMode}>로그인 하러가기</button>
                </div>
            )
        }
    }
    
    const [form, setValues] = useState({
        userID : '',
        password : '',
        email : '',
        name : ''
    });

    const updateField = e => {
        console.log(e.target.value)
        setValues({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    return (
        <div>
            {authButton()}
            {authChangeButton()}
            <AuthForm 
                form = {form}
                updateField = {updateField}
            />
        </div>
    )
}

export default Auth;