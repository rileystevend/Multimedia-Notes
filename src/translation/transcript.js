import axios from 'axios';

const headers = {
    'Authorization': 'Bearer 01ovKCI58Pm2ZnVO9dXbZ_I7yEGlAgIlrWDpOR6K3Kejpp6nrBkS7iML5hmMPNdWH8ggVdQ7bEsuuUijPCzt7--ztqEQM',
    'Content-Type': 'application/json'};

const data = {
        "media_url": "https://support.rev.com/hc/en-us/article_attachments/200043975/FTC_Sample_1_-_Single.mp3",
        "metadata": "This is a sample submit jobs option",
        // "callback_url": "https://www.example.com/callback"   
};

axios.post('https://api.rev.ai/revspeech/v1beta/jobs', data, {headers: headers})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

