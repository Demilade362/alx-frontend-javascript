import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(filename);

  return Promise.allSettled([signUp, upload]).then((values) => {
    const arr = [];
    for (const value of values) {
      arr.push({ status: value.status, value: value.value || value.reason });
    }
  });
}
