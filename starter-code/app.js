const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  ///console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});
// dog route:
app.get('/dog', (request, response, next) => {
  response.sendFile(__dirname + '/views/dog-page.html');
});
// gallery route:
app.get('/puppy-wheaten', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});
app.get('/dog', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Dog</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Hey wheaten</h1>
        <p>The Soft Coated Wheaten Terrier, an exuberant Irish farm dog, is happy, friendly, deeply devoted, and just stubborn enough to remind you he’s a terrier. The unique wheaten coat is low-shedding but needs diligent care to avoid matting.</p>
        <img src="./images/dog.jpg" />
      </body>
    </html>
  `);
});

app.get('/puppy-wheaten', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Photo gallery</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Photo Gallery</h1>
        <p>puppy</p>
        <img src="./images/puppy-wheaten.jpg" />
      </body>
    </html>
  `);
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});