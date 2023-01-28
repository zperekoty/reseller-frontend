export interface navbarLinks {
  text: string;
  path: string;
}

export interface FirestoreResponse<T extends object> {
  data?: T;
  message: string;
  status: 'success' | 'failure';
  error?: string;
}

export interface Products {
  id: string;
  name: string;
  description: string;
  owner: string;
  price: number;
  amount: number;
  interface: string;
}

export interface Orders {
  id: string;
  products: Products[];
  owner: string;
  interface: 'orders';
}

export interface User {
  id: string;
  name: string;
  login: string;
  password: string;
  telegram: string;
  telegramId: string | number;
  balance: number;
  verification: {
    verified: boolean;
    verificationCode?: string;
  };
  products: Products[];
  orders: Orders[];
  buys: Products[];
  interface: string;
}

export interface Cart {
  id: string;
  name: string;
  description: string;
  owner: string;
  price: number;
  amount: number;
  interface: string;
}

export interface QuickAuth {
  id: string;
  to: string;
  until: number;
  interface: string;
}
