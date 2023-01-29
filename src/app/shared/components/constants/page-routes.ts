export const PageRoutes: AppRoutes = {
    LOGIN: ['account', 'login'],
    ACCOUNT_REGISTER: ['account', 'criar'],
    HOME: ['home'],
    PAYMENT: ['payment'],
    COMPANY: ['company'],
    COURSES_DETAIL: ['company', 'detail'],
    NOT_FOUND: ['not-found'],
    ERROR: ['error']
  };
  
  export interface AppRoutes {
    LOGIN: string[];
    ACCOUNT_REGISTER: string[];
    HOME: string[];
    PAYMENT: string[];
    COMPANY: string[];
    COURSES_DETAIL: string[];
    NOT_FOUND: string[];
    ERROR: string[];
  }