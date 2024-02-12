export interface ICardHistoryProps {
    contact?: string;
    descripcion: string;
    date: string;
    amount: number;
    type: 'entrance' | 'exit';
}