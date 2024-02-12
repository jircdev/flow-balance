import React from "react";
import type { ICardHistoryProps } from "./types";
import { formatPrice } from "./format-prices";

export function CardHistory({ contact, descripcion, date, amount, type } : ICardHistoryProps) {
    const isIncome = type === "entrance";
    const amountClassName = isIncome ? "amount--income" : "amount--expense";

    const formattedPrice = formatPrice(amount);
    const formattedAmount = isIncome ? `+ ${formattedPrice}` : `- ${formattedPrice}`;
  
    return (
      <div className="content-history">
        <div className="content-history__info">
          <strong className="contact--info">{contact}</strong>
          <span className="description--info">{descripcion}</span>
        </div>
        <div className="content-history__amount">
          <span className={amountClassName}>{formattedAmount}</span>
          <span className="date--amount">{date}</span>
        </div>
      </div>
    );
  }