const PATH = "http://localhost:8090";

export default PATH;

export async function getAllProducts() {
  const resp = await fetch(`${PATH}/ads`);
  return resp.json();
}

export async function getImgProduct({ id }) {
  const resp = await fetch(`${PATH}/images/${id}`);
  return resp.json();
}
