import React from "react";
import { Input } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

export function FormSignUp() {
    return (
        <form action="" className="sign-up-app__form">
            <div className="form-app">
                <div className="form-app__inputs">
                    <Input type="text" name="name" placeholder="Primer nombre" />
                    <Input type="text" name="lastname" placeholder="Apellido"  />
                    <Input type="email" name="email" placeholder="Nombre de usuario o email"  />
                    <Input type="password" name="password" placeholder="Contraseña"  />

                </div>
                <Button variant="primary" block>Iniciar</Button>
            </div>
        </form>
    )
}