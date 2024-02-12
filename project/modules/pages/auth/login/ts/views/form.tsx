import React from "react";
import { Input } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

export function FormLogin() {
    return (
        <form action="" className="login-app__form">
            <div className="form-app">
                <div className="form-app__inputs">
                    <Input type="text" name="name" label="Nombre de usuario" />
                    <Input type="password" name="password" label="Contraseña"  />
                </div>
                <Button variant="primary" block>Iniciar</Button>
            </div>
        </form>
    )
}