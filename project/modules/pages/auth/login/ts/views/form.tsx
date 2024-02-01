import React from "react";
import { Input } from 'pragmate-ui/form';
import { Checkbox } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

export function FormLogin() {
    return (
        <form action="" className="login-app__form">
            <div className="form-app">
                <div className="form-app__inputs">
                    <Input type="text" name="name" label="User or email" />
                    <Input type="password" name="password" label="Password"  />
                </div>
                <div className="form-app__checkbox">
                    <Checkbox /* onChange={handleChange} checked={selectedValue} */ name="check" />
                    <label htmlFor="" className="label-checkbox">Remember to keep me registered</label>
                </div>
                <Button variant="primary">Login !</Button>
            </div>
        </form>
    )
}