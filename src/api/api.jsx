const PATH = "http://localhost:8090";

export default PATH;

export async function getAllProducts() {
  const resp = await fetch(`${PATH}/ads?sorting=new`);
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

export async function getUser({ token }) {
  const resp = await fetch(`${PATH}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resp.json();
}

export async function getToken({ login, password }) {
  const resp = await fetch(`${PATH}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      email: `${login}@gmail.com`,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  if (resp.status === 401)
    throw new Error("Введены не верный логин или пароль");

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
  if (resp.status === 400)
    throw new Error("Пользователь с таким login уже зарегистрирован");
  return resp.json();
}

export async function editToken({ token }) {
  const resp = await fetch(`${PATH}/auth/login`, {
    method: "PUT",
    body: JSON.stringify({
      access_token: token.access_token,
      refresh_token: token.refresh_token,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  return resp.json();
}

export async function editUserAvatar({ formAvatar, token }) {
  const newToken = await editToken({ token });
  const resp = await fetch(`${PATH}/user/avatar`, {
    method: "POST",
    body: formAvatar,
    headers: {
      Authorization: `Bearer ${newToken.access_token}`,
    },
  });
  const user = await resp.json();
  return { user, newToken };
}

export async function editNameUser({ name, token }) {
  const resp = await fetch(`${PATH}/user`, {
    method: "PATCH",
    body: JSON.stringify({
      name,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  if (resp.status === 422) throw new Error("Введены не допустимые символы");
  return resp.json();
}

export async function editSurnameUser({ surname, token }) {
  const resp = await fetch(`${PATH}/user`, {
    method: "PATCH",
    body: JSON.stringify({
      surname,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  if (resp.status === 422) throw new Error("Введены не допустимые символы");
  return resp.json();
}

export async function editCityUser({ city, token }) {
  const resp = await fetch(`${PATH}/user`, {
    method: "PATCH",
    body: JSON.stringify({
      city,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  if (resp.status === 422) throw new Error("Введены не допустимые символы");
  return resp.json();
}

export async function editPhoneUser({ phone, token }) {
  const resp = await fetch(`${PATH}/user`, {
    method: "PATCH",
    body: JSON.stringify({
      phone,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  });
  if (resp.status === 422) throw new Error("Введены не допустимые символы");
  return resp.json();
}

export async function editUser({ name, surname, city, phone, token }) {
  let user;
  const newToken = await editToken({ token });
  if (name) user = await editNameUser({ name, token: newToken });
  if (surname) user = await editSurnameUser({ surname, token: newToken });
  if (city) user = await editCityUser({ city, token: newToken });
  if (phone) user = await editPhoneUser({ phone, token: newToken });
  return { user, newToken };
}
