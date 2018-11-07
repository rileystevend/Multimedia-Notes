import axios from 'axios';

const headers = {};
const data = {};
axios.post('https://api.rev.ai/revspeech/v1beta/jobs', data, headers)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });