export interface Store {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string | null;
  categories: Categories[];
  products?: Product[];
}

export interface Categories {
  id: number;
  name: string;
  storeId: number;
  imageUrl: string | null;
  products?: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  storeId: number;
  imageUrl: string | null;
  categoryId: number | null;
}
