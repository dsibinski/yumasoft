import {Guid} from 'typescript-guid';

export interface Product {
    id: Guid;
    name: string;
    description: string;
    price: number;
    availableQuantity: number;

}