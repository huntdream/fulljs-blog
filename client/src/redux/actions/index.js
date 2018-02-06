import {
  ITEMS_ARE_LOADING,
  ITEMS_FETCH_SUCCESS,
  ITEMS_HAVE_ERROR
} from './constants';
import axios from 'axios';

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

export const itemFetchData = url => {
  return dispatch => {
    dispatch(itemsAreLoading(true));

    axios
      .get(url)
      .then(response => {
        console.log(response);
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => {
        dispatch(itemsFetchSuccess(response.data));
        dispatch(itemsAreLoading(false));
      })
      .catch(() => dispatch(itemsHaveError(true)));
  };
};
