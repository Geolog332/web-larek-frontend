
export interface ICard {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number | null;
    selected: boolean;
}

export interface IPage {
    counter: number;
    catalog: HTMLElement[];
    locked: boolean;
}

export interface IModal {
    content: HTMLElement;
}

export interface IBasket {
    items: HTMLElement[];
    total: number;
    list: HTMLElement[];
}

export interface IAddressForm {
    payment: string;
    address: string;
}

export interface IContactsForm {
    email: string;
    phone: string;
}

export interface IOrder extends IAddressForm, IContactsForm {
    items: string[];
    total: number;
}

export interface IOrderSuccess {
    id: string;
    total: number;
}



export type FormErrors = Partial<Record<keyof IOrder, string>>;

export type TSuccess = Pick<IOrderSuccess, 'total'>;

export type TCardCategory =
    | 'софт-скил'
    | 'другое'
    | 'дополнительное'
    | 'кнопка'
    | 'хард-скил';
