import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();

  Promise.all([uploadPhotoPromise, createUserPromise])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
