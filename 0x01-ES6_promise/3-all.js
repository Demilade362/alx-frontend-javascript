import { createUser } from './utils';

export default function handleProfileSignup() {
  const response = createUser();
  return response.then((data) => console.log(data));
}
