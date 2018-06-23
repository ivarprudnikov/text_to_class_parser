[![Build Status](https://travis-ci.org/ivarprudnikov/text_to_class_parser.svg?branch=master)](https://travis-ci.org/ivarprudnikov/text_to_class_parser)

## About

Small `node.js` program meant to be run on your command line, it will read the contents of 
`customers.txt`, then will parse it into class `CustomerList` and will find customers that are 
closest to a given point (hardcoded in `index.js`). 

### Prerequisites

- `Node.js installed` `v10`

### To run locally

This will a list of sorted entries in a file within specified radius.

- `npm i`
- `node index`

### Testing

Tests are written with `mocha` and being run in travis environment.

To run them locally:

- `npm test`