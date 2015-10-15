# Streaming HTML fragments

## Overview

This is just a quick example of how you can go about using multiple read
streams, streaming HTML fragments into HTML fragments (using 
[Hyperstream][1]) and serve them within a Web server (or in your
console's `stdout`).

## Installation

Clone this repository locally, and run `npm install` in the installation
destination.

## Running as an HTTP server

To run the example as a Web server, run:

```js
node server.js
```

and then visit `localhost:8000` in a browser.

## Running in the terminal

To see the completed source after all streams have drained, run:

```js
node console.js
```

in a terminal and examine the output.

[1]: https://github.com/substack/hyperstream
