export interface ICard {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number|null;
}

export interface IForm {
    payment: string;
    address: string;
    email: string;
    phone: string;
}

export interface IPage {
    counter:number;
    catalog:HTMLElement[];
    locked:boolean;
}

export interface IOrder extends IForm {
    items: string[];
    total: number;
}

export interface IOrderSuccess {
    id: string;
    total: number;
}