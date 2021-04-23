import {Guid} from 'typescript-guid';

export interface Customer {
    id: Guid;
    name: string;
    loyaltyDiscount: number;
}