export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  featured?: boolean;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}