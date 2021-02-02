# carpet-advantage
Commercial web-site for Carpet Advantage Carpet cleaners serving Northeast Ohio

## Libraries

This app was created using React

Libraries used include:

React Router,

Ant Design,

Sass (node-sass)

## Data

As of Dec 30th 2020--
Backend for this app is not compleated. 
All data is static and is kept in src/data.js file

For ease of updating all data used within the app is dynamically rendered from objects within this file. 

As backend is compleated all data coming from the backend should be shaped according the specific data that is rendered from the data file.

In the public folder there are two folders that hold documents (pdf/docx) and images (before and after). When adding documents or images be sure to link the file name in the approprate data object in the data file.

## Styles

This app is styled using sass


Each component has its own sass file used to style that page
with an exception to the home page where each component has its own scss file.

Upon creating new pages be sure to import the pages sass file into styles.scss located in src/styles folder.

This folder is broken down into two sub folders 

component - where each component has its own sass file for styling

init- which holds initial sass files -- global, mixins, variables, and reset

styles are reset using  http://meyerweb.com/eric/tools/css/reset/  v2.0 | 20110126

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ae4bf51-08ec-415e-9b21-fbfaae0bb0bf/deploy-status)](https://app.netlify.com/sites/carpet-advantage/deploys)
