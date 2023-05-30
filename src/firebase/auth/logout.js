import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
const Logout = () => signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export default Logout;