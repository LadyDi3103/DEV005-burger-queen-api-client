export interface DataOrder{
    client: string;
    products: [];
    status: string;
    dataEntry: string;
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