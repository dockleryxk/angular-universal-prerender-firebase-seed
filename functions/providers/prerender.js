"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require('url');
exports.shouldShowPrerenderedPage = function (req) {
    var userAgent = req.headers['user-agent'], bufferAgent = req.headers['x-bufferbot'], isRequestingPrerenderedPage = false;
    if (!userAgent)
        return false;
    if (req.method != 'GET' && req.method != 'HEAD')
        return false;
    // if it contains _escaped_fragment_, show prerendered page
    var parsedQuery = url.parse(req.url, true).query;
    if (parsedQuery && parsedQuery['_escaped_fragment_'] !== undefined)
        isRequestingPrerenderedPage = true;
    // if it is a bot...show prerendered page
    if (crawlerUserAgents.some(function (crawlerUserAgent) { return userAgent.toLowerCase().indexOf(crawlerUserAgent.toLowerCase()) !== -1; }))
        isRequestingPrerenderedPage = true;
    // if it is BufferBot...show prerendered page
    if (bufferAgent)
        isRequestingPrerenderedPage = true;
    // if it is a bot and is requesting a resource...dont prerender
    if (extensionsToIgnore.some(function (extension) { return req.url.toLowerCase().indexOf(extension) !== -1; }))
        return false;
    return isRequestingPrerenderedPage;
};
var crawlerUserAgents = [
    // 'googlebot',
    // 'yahoo',
    // 'bingbot',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest/0.',
    'developers.google.com/+/web/snippet',
    'slackbot',
    'vkShare',
    'W3C_Validator',
    'redditbot',
    'Applebot',
    'WhatsApp',
    'flipboard',
    'tumblr',
    'bitlybot',
    'SkypeUriPreview',
    'nuzzel',
    'Discordbot',
    'Google Page Speed',
    'Qwantify',
    'pinterestbot'
];
var extensionsToIgnore = [
    '.js',
    '.css',
    '.xml',
    '.less',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.pdf',
    '.doc',
    '.txt',
    '.ico',
    '.rss',
    '.zip',
    '.mp3',
    '.rar',
    '.exe',
    '.wmv',
    '.doc',
    '.avi',
    '.ppt',
    '.mpg',
    '.mpeg',
    '.tif',
    '.wav',
    '.mov',
    '.psd',
    '.ai',
    '.xls',
    '.mp4',
    '.m4a',
    '.swf',
    '.dat',
    '.dmg',
    '.iso',
    '.flv',
    '.m4v',
    '.torrent',
    '.woff',
    '.ttf',
    '.svg'
];
