export interface DataOrder{
    client: string;
    products: [];
    status: string;
    dataEntry: string;
}
export interface DataUser{
    email: string;
    password: string;
    role: string;
}
export interface DataProduct {
    name: string;
    price: number;
    image: string;
    type: string;
  }
export interface DataUserEdit {
    id: number;
    email: string;
    password: string;
    role: string;
}
export interface DataProductEdit {
    id: number;
    name: string;
    price: number;
    image: string;
    type: string;
  }