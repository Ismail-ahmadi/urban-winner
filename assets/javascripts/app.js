import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import '../stylesheets/style.scss';
import * as config from '../../config/config.json';

const flickity = new Flickity('.gallery', {
  contain: true,
  // More options are available:
  // https://flickity.metafizzy.co/options.html
});

// import qs from 'qs';
// import axios from 'axios';
// axios
//   .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }, { arrayFormat: 'brackets' }))
//   .then(_ => console.log('success'))
//   .catch(_ => console.log('failed'));
