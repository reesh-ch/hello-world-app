const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the hello world page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
          text-align: center;
          background: white;
          padding: 3rem;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        h1 {
          color: #333;
          font-size: 3rem;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello World! 🌍</h1>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
