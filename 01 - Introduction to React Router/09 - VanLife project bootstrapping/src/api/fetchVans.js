import { getDocs, query, where } from "firebase/firestore/lite";
import { usersRef, vansCollectionRef } from "../server/server";

async function getVansAPI() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));

  return dataArr;
}

async function getHostAPI(email, password) {
  const q = query(
    usersRef,
    where("email", "==", email),
    where("password", "==", password)
  );
  const user = (await getDocs(q)).docs
    .map((doc) => ({ ...doc.data() }))
    .find((el) => el.email === email && el.password === password);
  return user;
}

async function getHosVansAPI(id = "123") {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs
    .map((doc) => ({
      ...doc.data(),
    }))
    .filter((data) => data.hostId !== id.toString());

  return dataArr;
}

export { getVansAPI, getHostAPI, getHosVansAPI };
