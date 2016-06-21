import fetch from 'isomorphic-fetch';

/*
--------------------------------------
  ACTION TYPES
--------------------------------------
*/

export const LISTING_GET_REQUEST = 'LISTING_GET_REQUEST';
export const LISTING_GET_RESPONSE = 'LISTING_GET_RESPONSE';

export const LISTING_POST_REQUEST = 'LISTING_POST_REQUEST';
export const LISTING_POST_RESPONSE = 'LISTING_POST_RESPONSE';

export const LISTING_PUT_REQUEST = 'LISTING_PUT_REQUEST';
export const LISTING_PUT_RESPONSE = 'LISTING_PUT_RESPONSE';

export const LISTING_DELETE_REQUEST = 'LISTING_DELETE_REQUEST';
export const LISTING_DELETE_RESPONSE = 'LISTING_DELETE_RESPONSE';

/*
---------------------------------------
  ACTION CREATORS
---------------------------------------
*/

// -------------GET--------------------

export function listingGetRequest(id) {
  return {
    type: LISTING_GET_REQUEST,
    id,
  };
}
export function listingGetResponse(data) {
  return {
    type: LISTING_GET_RESPONSE,
    data,
  };
}
export function getListing(id) {
  return dispatch => {
    dispatch(listingGetRequest(id));
    return fetch('/api/listing', { credentials: 'same-origin' })
      .then(response => response.json())
      .then(json => dispatch(listingGetResponse(json)));
  };
}

// -------------POST--------------------

export function listingPostRequest() {
  return {
    type: LISTING_POST_REQUEST,
  };
}
export function listingPostResponse(data) {
  return {
    type: LISTING_POST_RESPONSE,
    data,
  };
}
export function postListing(data) {
  return dispatch => {
    dispatch(listingPostRequest());
    return fetch('/api/listing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => dispatch(listingPostResponse(json)));
  };
}

// -------------PUT--------------------

export function listingPutRequest() {
  return {
    type: LISTING_PUT_REQUEST,
  };
}
export function listingPutResponse(data) {
  return {
    type: LISTING_PUT_RESPONSE,
    data,
  };
}
export function putListing(data) {
  return dispatch => {
    dispatch(listingPutRequest());
    return fetch('/api/listing', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => dispatch(listingPutResponse(json)));
  };
}

// -------------DELETE--------------------

export function listingDeleteRequest() {
  return {
    type: LISTING_DELETE_REQUEST,
  };
}
export function listingDeleteResponse(data) {
  return {
    type: LISTING_DELETE_RESPONSE,
    data,
  };
}
export function deleteListing(data) {
  return dispatch => {
    dispatch(listingDeleteRequest());
    return fetch('/api/listing', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => dispatch(listingDeleteResponse(json)));
  };
}