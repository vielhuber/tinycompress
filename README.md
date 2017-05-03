# ✨ tinycompress ✨

tinycompress is a tiny casperjs script for compressing local images using tinypng.

## Installation

* Install [phantomjs](http://phantomjs.org/download.html)
* Install [casperjs](http://docs.casperjs.org/en/latest/installation.html)
* Download https://raw.githubusercontent.com/vielhuber/tinycompress/master/tinycompress.js
* Add folder to your PATH variable

## Usage

```
casperjs tinycompress C:\path\where\all\images\should\be\compressed
```

## Disclaimer

All images are overwritten (by design).
The script uses the official tinypng web converter which has a limit of 5 MB for each image.
You do not need an API key.