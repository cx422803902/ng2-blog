export interface User {
  id: number;
  userName: string;
  nickName: string;
  password?: string;
  rememberMe?: boolean;
  email?: string;
  telephone?: string;

  status?: UserStatus;
}

export enum UserStatus {
  LOGIN,
  LOGOUT
}