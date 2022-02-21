import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => {  //need to convert this action creator from synchronous to async action creator using a middleware 
  return async (dispatch) => {
    const response = await fakeStoreApi.get('/products');

    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data
    })
  }
}

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products
})

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);

  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data
  })
}

export const removeSelectedProduct = () => ({
  type: ActionTypes.REMOVE_SELECTED_PRODUCT,
})