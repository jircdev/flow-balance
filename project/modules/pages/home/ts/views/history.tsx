import React from "react"; 
import { CardHistory } from "../components/card-history";

export function History() {
    return (
        <article className="container__history">
            <h2 className="container__history--title">
                Historial
            </h2>

            <section className="container__history-section">
                <CardHistory descripcion="Compra de víveres" date="2024-02-10" amount={45.00} type="entrance" />
                <CardHistory descripcion="Venta de productos" date="2024-02-09" amount={45.00} type="exit" />
            </section>
		</article>
    )
}