import qs from 'qs';
import axios from 'axios';
import site from '../../config/site';
import '../stylesheets/style.scss';

// Static site - Homework 4 code below
axios.post(
  `${site.url}/one`,
  qs.stringify({
    name: 'Axios',
    email: 'axios@gmail.com',
    role: 'leader',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem pariatur provident eaque, obcaecati laudantium officia dolores maxime illum assumenda. Dolor tenetur saepe voluptatem iure suscipit hic labore, consequuntur cum at.',
  })
);
