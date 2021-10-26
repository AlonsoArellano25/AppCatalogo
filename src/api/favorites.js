import {API_URL} from '../utils/constants';

export async function isFavoriteApi(idProduct) {
  try {
    const url = `${API_URL}/favorites?product=${idProduct}`;
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addFavoritesApi(idProduct) {
  try {
    const url = `${API_URL}/favorites`;
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: idProduct,
      }),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteFavoriteApi(idProduct) {
  try {
    const dataFound = await isFavoriteApi(idProduct);
    if (dataFound.length > 0) {
      const url = `${API_URL}/favorites/${dataFound[0]?._id}`;
      const params = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const resp = await fetch(url, params);
      const res = await resp.json();
      return res;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getFavoritesApi() {
  try {
    const url = `${API_URL}/favorites`;
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}
