// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');
const nodemailer = require('nodemailer');


const translate = new Translate();

const text = `Speaker 0    00:00    Hi, my name is Jack Ratzinger and I'm going to be talking about how to recruit a co founder and a team for your startup to first give a quick overview of what we're going to talk about. We're going to start out by talking about the sorts of folks you might be looking for for your startup, and then we'll dive right into tactics and approaches you can use to get inbound interest in your company. We'll talk a little bit about how people get, how to get people excited for your startup, and then we'll talk about the screening process, how to figure out if someone is a good match and someone you should make an offer to. Will then cover how you make an offer and we'll wrap up by covering a few specific issues. One is technical hiring, which can be a little different from more general recruiting, and finally we'll talk about specifically what you should do when you're looking for a cofounder.  
Speaker 0    00:43    Many of the things we're going to be talking about are applicable to both finding a cofounder and finding employees, but there are a few specific issues that are relevant to when you're looking for a cofounder to be a part of your startup. So we'll talk about that. I want to give you a quick background on myself. I am the CO founder of <inaudible>. We are a search engine for sports and concert tickets based in New York City. This is my third startup and for all three we built a team so I have some experience with this at seatgeek. We have 17 folks and I think we have an incredible team and I want to talk about some things that we've done that I think has helped us get there. Um, it's sort of the overall thesis for this. One thing that's worth keeping in mind is that recruiting is a lot of work. Some people think that you can raise money and spend a few weeks building your team and then move on to more interesting things. It's totally not the case. Recruiting something that you're always doing. I as a cofounder, probably spend regularly 30 percent of my time trying to find new people to add to our team, but if you know it's. It's a lot of work because it's such an important thing to assess the success of a startup and if you invest that time, then the dividends pay 
off.` 
const target = 'es';
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';

// Translates the text into the target language. "text" can be a string for
// translating a single piece of text, or an array of strings for translating
// multiple texts.
translate
  .translate(text, target)
  .then(results => {
    const translations = results[0];

    console.log("TRANSLATION", translations);


    const sendEmail = (username, email, translation) => {
      nodemailer.createTestAccount(() => {
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'thebeatbookhelp@gmail.com',
            pass: 'Manikstevetrent!',
          },
        });
        const mailOptions = {
          from: '"Meeting Translator" <thebeatbookhelp@gmail.com>', // sender address
          to: email, // list of receivers
          subject: `Welcome ${username} ✔`, // Subject line
          text: translation, // plain text body
          html: `<b>Hello ${username}! </b><b> Here is your translation! </b>` + translation, // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }

        });
      });
    };
    
    sendEmail('Steven', 'rileystevend@gmail.com', translations)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });



