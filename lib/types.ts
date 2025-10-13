export interface Store {
  id: number;
  name: string;
  categories: Categories[];
}

export interface Categories {
  id: number;
  name: string;
  storeId: number;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}
