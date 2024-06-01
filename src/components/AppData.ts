import { FormErrors, IAddressForm, ICard, IContactsForm, IOrder } from "../types/index";
import { Card } from "./Card";
import { Model } from "./base/model";




export interface IStatusApp {
    catalog: ICard[];
    order: IOrder | null;
    formErrors: FormErrors;
}




export class StatusApp extends Model<IStatusApp> {
    catalog: ICard[];
    basket: Card[] = [];
    order: IOrder = {
        payment: '',
        address: '',
        email: '',
        phone: '',
        items: [],
        total: 0,
    };
    formErrors: FormErrors = {};

    // Установка списка товаров
    setCatalog(items: ICard[]) {
        this.catalog = items;
        this.emitChanges('cards:changed');
    }
    // Добавление товаров в корзину
    addToBasket(value: Card) {
        this.basket.push(value);
    }

    // Получение количества товаров в корзине
    sumCardsInBasket() {
        return this.basket.length;
    }

    // Метод для получения суммы цен всех товаров в корзине
    getTotalBasketPrice() {
        return this.basket.reduce((sum, next) => sum + next.price, 0);
    }

    // Метод для удаления товара из корзины
    deleteFromBasket(id: string) {
        this.basket = this.basket.filter(item => item.id !== id)
    }

    // Метод для полной очистки корзины
    clearBasket() {
        this.basket.length = 0;
    }

    // Метод для добавления ID товаров в корзине в поле items для order
    setItems() {
        this.order.items = this.basket.map(item => item.id)
    }

    // Метод для заполнения полей адрес и способ оплаты
    setOrderField(field: keyof IAddressForm, value: string): void {
        this.order[field] = value;
        if (this.validateOrderForm()) { }
    }
    // Валидация формы заказа
    validateOrderForm(): boolean {
        const errors: typeof this.formErrors = {};
        if (!this.order.payment) {
            errors.payment = 'Необходимо указать способ оплаты';
        }
        if (!this.order.address) {
            errors.address = 'Необходимо указать адрес';
        }
        this.formErrors = errors;
        this.events.emit('addressFormErrors:change', this.formErrors);
        return Object.keys(errors).length === 0;
    }
    // Метод для заполнения полей email и телефон  
    setContactsField(field: keyof IContactsForm, value: string): void {
        this.order[field] = value;
        if (this.validateContactsForm()) { }
    }
    // Валидация формы контактов
    validateContactsForm(): boolean {
        const errors: typeof this.formErrors = {};
        if (!this.order.email) {
            errors.email = 'Необходимо указать email';
        }
        if (!this.order.phone) {
            errors.phone = 'Необходимо указать телефон';
        }
        this.formErrors = errors;
        this.events.emit('contactsFormErrors:change', this.formErrors);
        return Object.keys(errors).length === 0;
    }

    // Метод для сброса значений формы
    resetForm(): void {
        this.order = {
            items: [],
            total: null,
            address: '',
            email: '',
            phone: '',
            payment: ''
        };
    }

    // Метод для обновления поля selected во всех товарах после совершения покупки
    resetSelected() {
        this.catalog.forEach(item => item.selected = false)
    }
}