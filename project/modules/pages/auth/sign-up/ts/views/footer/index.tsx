import React from "react";
import { IconBackground } from "./icon";
import { iconFace, iconGoogle, iconIg } from "./icons";

export function Footer() {
    return (
        <footer className="sign-up-app__footer">
            <div className="line"></div>
            <span className="footer__span--line">
                O inicia sesión con
            </span>
            <section className="content-links">
                <IconBackground icon={iconGoogle} />
                <IconBackground icon={iconFace} />
                <IconBackground icon={iconIg} />
            </section>
        </footer>
    )
}