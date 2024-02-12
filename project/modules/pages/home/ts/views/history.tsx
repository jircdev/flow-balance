import React from "react"; 
import { CardHistory } from "../components/card-history/card-history";

export function History() {
    return (
        <article className="container__history">
            <h2 className="container__history--title">
                Historial
            </h2>

            <section className="container__history-section">
                <CardHistory 
                    descripcion="Compra de víveres" 
                    contact="Luis Peñuela" 
                    date="2024-02-10" 
                    amount={285100} 
                    type="entrance" 
                />
                <CardHistory 
                    descripcion="Venta de productos" 
                    contact="Pedro Contreras" 
                    date="2024-02-09" 
                    amount={85100} 
                    type="exit" 
                />
                <CardHistory 
                    descripcion="Concierto" 
                    contact="Jamiroquai Paris" 
                    date="hoy 07:25" 
                    amount={150000} 
                    type="exit" 
                />
            </section>
		</article>
    )
}