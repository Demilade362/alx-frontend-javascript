import { createUser } from './utils';

function handleProfileSignup() {
  const response = createUser();
  return response.then((data) => console.log(data.firstName, data.lastName));
}

handleProfileSignup();
