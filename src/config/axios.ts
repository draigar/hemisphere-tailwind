import axios from 'axios';

// const authStore = store.Auth.auth.token;
// console.log('from axios', authStore);

const instance = axios.create({
  // .. where we make our configurations
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    // Authorization: 'Bearer ' + authStore,
  },
});

instance.interceptors.request.use(
  request => {
    // console.log('from axios', help.formatMobxData(authStore.auth.token));
    // console.log('request', request);
    // Edit request config
    return request;
  },
  error => {
    // console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    // console.log(response);
    // Edit response config
    return Promise.resolve(response);
  },
  error => {
    console.log('er', error.response);
    const code = parseInt(error.response && error.response.status, 10);
    if (code === 401) {
      console.log('error from ', error.response);
    }
    return Promise.reject(error);
  },
);

export default instance