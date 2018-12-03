import qs from 'qs';
import axios from 'axios';
import site from '../../config/site';
import '../stylesheets/style.scss';

// Static site - Homework 4 code below
const data = {
  name: 'Milo and Finn',
  email: 'milo+finn@gmail.com',
  role: 'follower',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem pariatur provident eaque, obcaecati laudantium officia dolores maxime illum assumenda. Dolor tenetur saepe voluptatem iure suscipit hic labore, consequuntur cum at.',
};

const submitForm = data =>
  axios
    .post(site.url, qs.stringify({ 'form-name': site.formName, ...data }))
    .then(_ => console.log('success'))
    .catch(_ => console.log('failed'));
