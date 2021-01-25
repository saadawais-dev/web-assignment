import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  if (
    !(
      error.response &&
      error.response.status >= 404 &&
      error.response.status <= 500
    )
  ) {
    console.log("error", error);
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
