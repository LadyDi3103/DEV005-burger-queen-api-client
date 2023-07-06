export interface DataOrder{
    client: string;
    products: [];
    status: string;
}
export interface DataUser{
    email: string;
    password: string;
    rol: string;
}
export interface DataProduct {
    name: string;
    price: number;
    image: string;
    type: string;
  }