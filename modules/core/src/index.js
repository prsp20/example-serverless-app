import { createUser } from './user/UserService';

export const coreFunction = (something) => {
  console.log('Amazing --- core function executed');
  createUser();
}
