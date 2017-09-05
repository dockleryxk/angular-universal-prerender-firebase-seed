'use strict';
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { shouldShowPrerenderedPage } from './providers/prerender';
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const express = require('express');
const path = require('path');
const functions = require('firebase-functions');
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const fs = require('fs');
const index = fs.readFileSync(path.resolve(__dirname, 'dist-server/index.html'), 'utf8');
const files = fs.readdirSync(path.resolve(__dirname, './dist-server'));
const mainFiles = files.filter(file => file.startsWith('main'));
const hash = mainFiles[0].split('.')[1];
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./dist-server/main.${hash}.bundle`);

const app = express();
app.set('view engine', 'html');
app.get('*', (req, res) => {
  console.log('req.path:', req.path);
  if (shouldShowPrerenderedPage(req)) {
    renderModuleFactory(AppServerModuleNgFactory, {
      document: index,
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
    res.sendFile(path.resolve(__dirname, './dist-browser/index.html'));
  }
});

exports.ssr = functions.https.onRequest(app);

// other functions here
