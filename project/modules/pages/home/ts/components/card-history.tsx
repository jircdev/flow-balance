import React from "react"; 

interface ICardHistoryProps {
    descripcion: string;
    date: string;
    amount: number;
    type: 'entrance' | 'exit';
  }

export function CardHistory({ descripcion, date, amount, type } : ICardHistoryProps) {
    const isIncome = type === "entrance";
    const amountClassName = isIncome ? "amount--income" : "amount--expense";
    const formattedAmount = isIncome ? `+${amount}` : `-${amount}`;
  
    return (
      <div className="content-history">
        <div className="content-history__info">
          <strong className="description--info">{descripcion}</strong>
          <span className="date--info">{date}</span>
        </div>
        <div className="content-history__amount">
          <span className={amountClassName}>{formattedAmount}</span>
        </div>
      </div>
    );
  }