import axios from 'axios';

let API_URL = 'https://isko88.github.io/apipizza.json';
    async function api(endpoint, method = 'GET', body) {
       try {
           return await axios({
               method,
               url: `${API_URL}`,
               data: body
           });
       } catch (err) {
           console.log(err);
       }
}
export default api;