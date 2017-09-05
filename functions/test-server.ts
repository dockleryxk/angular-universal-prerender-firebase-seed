'use strict';
require('zone.js/dist/zone-node');
import 'reflect-metadata';
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
import { shouldShowPrerenderedPage } from './providers/prerender';
const express = require('express');
const path = require('path');
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const fs = require('fs');
const serverIndex = fs.readFileSync(path.resolve(__dirname, './dist-server/index.html'), 'utf8');
const files = fs.readdirSync(path.resolve(__dirname, './dist-server'));
const mainFiles = files.filter(file => file.startsWith('main'));
const hash = mainFiles[0].split('.')[1];
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist-server/main.${hash}.bundle`);

const app = express();
const port = 3000;
const baseUrl = `http://localhost:${port}`;
app.get('/*.bundle.*', function (req, res) {
  // kinda dirty but it's a test server
  try {
    res.sendFile(path.resolve(__dirname, './dist-browser/' + req.path));
  } catch (e) {
    res.sendFile(path.resolve(__dirname, './dist-server/' + req.path));
  }
});
app.get('/*.chunk.*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './dist-browser/' + req.path));
});
app.get('/roboto-v15-*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './dist-server/' + req.path));
});
app.get('/assets/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './dist-server' + req.path));
});
app.get('*/favicon.ico', function (req, res) {
  res.sendFile(path.resolve(__dirname, './dist-server/favicon.ico'));
});

app.set('view engine', 'html');
app.get('*', (req, res) => {
  console.log('req.path:', req.path);
  if (shouldShowPrerenderedPage(req)) {
    console.log('should show prerendered page');
    renderModuleFactory(AppServerModuleNgFactory, {
      document: serverIndex,
      url: req.path,
      extraProviders: [
        provideModuleMap(LAZY_MODULE_MAP)
      ]
    })
      .then(html => {
        res.send(html);
      }).catch(e => {
      console.log('error:', e);
    });
  } else {
    console.log('don\'t show prerendered page');
    res.sendFile(path.resolve(__dirname, './dist-browser/index.html'));
  }
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
