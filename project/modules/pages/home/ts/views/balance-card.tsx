import React from "react";

export function BalanceCard() {
    return (
        <>
          <section className="balance-card">
                <span className="balance-card__span">Tu Saldo</span>
                <div className="content-balance">
                    <h3 className="content-balance__h3">$2,454.00</h3>
                    <div className="balance-text">Balance</div>
                </div>
          </section>
        </>
    )
}