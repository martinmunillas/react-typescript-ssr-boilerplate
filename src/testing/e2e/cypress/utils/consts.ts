export interface User {
  email: string;
  password: string;
  failEmail: string;
  failPassword: string;
}
export const user: User = {
  email: 'test01@test.com',
  password: 'helloworld',
  failEmail: 'fail@test.com',
  failPassword: 'byeworld',
};
