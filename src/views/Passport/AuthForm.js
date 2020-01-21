import React from 'react';


const AuthForm = ({form, updateField}) => {

    return (
        <div>
            <form>
            <input
                value={form.userID}
                name="userID"
                onChange={updateField}
            />
            <input
                value={form.password}
                name="password"
                onChange={updateField}
            />
            <input
                value={form.email}
                name="email"
                onChange={updateField}
            />
            <input
                value={form.name}
                name="name"
                onChange={updateField}
            />
            </form>
        </div>
    )
}

export default AuthForm;