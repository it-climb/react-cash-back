export const checkEmail = email =>{
  console.log("utils user checkEmail", email);
  return fetch(`/users/findEmail?email=${email}`);
}

const createData = user => {
  return {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
}

export const createUser = user => {
  console.log("utils user createUser", user);
  const data = createData(user);
  return fetch("users", data);
}