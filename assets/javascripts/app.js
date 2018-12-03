import qs from 'qs';
import axios from 'axios';
import * as config from '../../config/config.json';
import '../stylesheets/style.scss';

// Static site - Homework 4 code below
const form = document.querySelector('.form');
const formData = {
  name: 'Milo and Finn',
  email: 'milo+finn@gmail.com',
  message: 'Testing',
};

const handleSubmit = e => {
  e.preventDefault();
  axios
    .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }))
    .then(_ => console.log('success'))
    .catch(_ => console.log('failed'));
};

form.addEventListener('submit', handleSubmit);
