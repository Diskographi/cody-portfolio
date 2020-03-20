const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
  const data = [
    {id: 1, title: 'Bio', text: 'My name is Cody Hill and I am a JavaScript developer from Santa Clarita, California!', photo: "https://visitsantaclarita.com/files/2016/03/home-Map.jpg"},
    {id: 2, title: 'Images', text: 'Here is a gallery of some of the things I\'ve created', photo: "https://www.parkablogs.com/sites/default/files/20180410%20-%20iPad%206%20Gen-06.jpg"},
    {id: 3, title: 'About', text: 'I am a 27 year old developer who has been coding for over two years. I enjoy playing guitar, origami, drawing in my sketchbook and spending time with my husband.', photo: "https://imgur.com/gallery/tsstDTT"},
    {id: 4, title: 'Projects', text: 'These are some projects that i have worked on in the past.', photo: "https://imgur.com/gallery/OnXTkQG"}
  ];
  res.json(data);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port} hoopshe-dooba bop.`));