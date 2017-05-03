# 🐘 tinycompress 🐘

tinycompress is a tiny CasperJS script for compressing local images using the official tinypng web uploader.

## Installation

* Install [PhantomJS](http://phantomjs.org/download.html)
* Install [CasperJS](http://docs.casperjs.org/en/latest/installation.html)
* Download https://raw.githubusercontent.com/vielhuber/tinycompress/master/tinycompress.js
* Add folder to your PATH variable

## Usage

```
casperjs tinycompress.js C:\path\to\images
```

## Disclaimer

All images are overwritten (by design).
The path is travered recursively (be careful).
The script uses the official tinypng web converter which has a limit of 5 MB for each image.
You do not need an API key.