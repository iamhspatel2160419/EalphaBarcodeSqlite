import axios from 'axios';
let url;
if (__DEV__) {
  url = '';
} else {
  url = '';
}
const instance = axios.create({
  baseURL: url,
});
export default instance;