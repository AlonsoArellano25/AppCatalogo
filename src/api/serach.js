import {API_URL} from '../utils/constants';

export async function searchProductsApi(search) {
  try {
    const url = `${API_URL}/products?_q=${search}&_limit=40`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
