
export interface ICard {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number|null;
}

export type TCardCategory =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил';

export interface IPage {
    counter: number;
    catalog: HTMLElement[];
    locked: boolean;
}

export interface IModal{
    content: HTMLElement;
} 

interface IBasket{
	items: HTMLElement[]; 
	total: number;
	selected: string[];
}

export interface IOrder {
    payment:string;
    total:number;
    address:string;
    phone:string;
    email:string;
    items:string[];
}

export interface IAddressForm {
    payment:string;
    address:string;
}

export interface IContacntForm {
    email:string;
    phone:string;
}

export interface IOrderSuccess {
    id: string;
    total: number;
}

