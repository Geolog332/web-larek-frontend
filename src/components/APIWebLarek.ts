import { Api, ApiListResponse } from './base/api';
import { ICard, IOrder, IOrderSuccess } from '../types/index';

interface IAPIWebLarek {
	getCards: () => Promise<ICard[]>;						
	getCardsId: (id: string) => Promise<ICard>;				
	getOrder: (order: IOrder) => Promise<IOrderSuccess>;  
}

export class APIWebLarek extends Api implements IAPIWebLarek {
	readonly cdn: string;
	constructor(cdn: string, baseUrl: string, options?: RequestInit) {
		super(baseUrl, options);
		this.cdn = cdn;
	}

	// Метод для получения списка продуктов
	getCards(): Promise<ICard[]> {
		return this.get('/product').then((data: ApiListResponse<ICard>) =>
			data.items.map((item) => ({
				...item,
				image: this.cdn + item.image,
			}))
		);
	}

	// Метод для получения информации о продукте по его ID
	getCardsId(id:string): Promise<ICard>{
		return this.get(`/product/${id}`).then((item: ICard)=>({
			...item,
			image:this.cdn + item.image,
		}))
	}

	// Метод для оформления заказа
	getOrder(order:IOrder):Promise<IOrderSuccess>{
		return this.post('/order', order).then((data: IOrderSuccess) => data);
	}
}
