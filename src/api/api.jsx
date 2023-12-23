const PATH = "http://localhost:8090";

export default PATH;

export async function getAllProducts() {
  const resp = await fetch(`${PATH}/ads`);
  return resp.json();
}

export async function getUsersProducts({ id }) {
  const resp = await fetch(`${PATH}/ads?user_id=${id}`);
  return resp.json();
}

export async function getImgProduct({ id }) {
  const resp = await fetch(`${PATH}/images/${id}`);
  return resp.json();
}

export async function getCommentsProduct({ id }) {
  const resp = await fetch(`${PATH}/ads/${id}/comments`);
  return resp.json();
}

export async function addRegister({ login, password, name, surname, city }) {
  const resp = await fetch(`${PATH}/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      email: `${login}@gmail.com`,
      password,
      name,
      surname,
      city,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (resp.status === 422) throw new Error("Введены не допустимые символы");
  return resp.json();
}
