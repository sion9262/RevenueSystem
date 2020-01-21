import React from 'react';

const Login = ({check, setCheckLogin}) => {


    return (
        <div>
            {check}
            <button onClick={ setCheckLogin}>로그인</button>
        </div>
    )
}

export default Login;