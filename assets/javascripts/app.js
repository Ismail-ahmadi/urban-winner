import qs from 'qs';
import axios from 'axios';
import i18next from 'i18next';
import '../stylesheets/style.scss';
import * as config from '../../config/config.json';

const french = document.querySelector('.locale button');

const handleSubmit = e => {
  e.preventDefault();
  axios
    .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }, { arrayFormat: 'brackets' }))
    .then(_ => console.log('success'))
    .catch(_ => console.log('failed'));
};

french.addEventListener('click', e => {
  i18next.changeLanguage('fr');
});

i18next.on('languageChanged', () => console.log('translating'));
