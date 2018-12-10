import qs from 'qs';
import axios from 'axios';
import '../stylesheets/style.scss';
import * as config from '../../config/config.json';

// const handleSubmit = e => {
//   e.preventDefault();
//   axios
//     .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }, { arrayFormat: 'brackets' }))
//     .then(_ => console.log('success'))
//     .catch(_ => console.log('failed'));
// };
