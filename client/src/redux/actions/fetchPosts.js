import {
  ITEMS_ARE_LOADING,
  ITEMS_FETCH_SUCCESS,
  ITEMS_HAVE_ERROR
} from './constants';

import { host } from '../../config/host';

export const itemsAreLoading = bool => ({
  type: ITEMS_ARE_LOADING,
  isFetching: bool
});

export const itemsHaveError = bool => ({
  type: ITEMS_HAVE_ERROR,
  hasError: bool
});

export const itemsFetchSuccess = items => ({
  type: ITEMS_FETCH_SUCCESS,
  items
});

export const itemFetchData = path => {
  return dispatch => {
    dispatch(itemsAreLoading(true));

    fetch(host + path)
      .then(response => {
        console.log(response);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(res => {
        if (res.success) {
          dispatch(itemsFetchSuccess(res.posts));
          dispatch(itemsAreLoading(false));
        } else {
          console.log(res.error);
          throw Error(res.error);
        }
      })
      .catch(() => dispatch(itemsHaveError(true)));
  };
};
