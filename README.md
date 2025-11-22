# Hello World Web App

A simple Node.js + Express application that displays "Hello World".

## Deploy to Railway

1. Go to [railway.app](https://railway.app) and sign in with GitHub
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Select this repository (hello-world-app)
5. Railway will automatically detect the Node.js project and deploy it
6. Your app will be live at the URL Railway provides!

## Local Testing (Optional)

If you want to test locally first:

```bash
npm install
npm start
```

Then visit http://localhost:3000

## Files Included

- `package.json` - Defines dependencies (Express) and Node.js version
- `server.js` - Main application file
- `README.md` - This file

Railway will automatically:
- Detect this is a Node.js project
- Run `npm install` to install Express
- Run `npm start` to start the server
- Assign a public URL to your app
