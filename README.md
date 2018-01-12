<img src="https://user-images.githubusercontent.com/11332183/34885047-f0cf5d6a-f7be-11e7-83ce-788da3d2c61f.png" style="margin-bottom: 40px; max-width: 100%; max-height: 60px;">

# is-express-router

Checking if an argument is an express Router function from express.Router()

## Install

`npm install --save is-express-router`

or with yarn:

`yarn add is-express-router`

## Usage

### True

```
import express from 'express'
import isExpressRouter from 'is-express-router'

console.log(isExpressRouter(express.Router()))
```

### False

```
import isExpressRouter from 'is-express-router'

console.log(isExpressRouter(() => {})))
console.log(isExpressRouter(null)))
console.log(isExpressRouter({})))
console.log(isExpressRouter([])))
// ...
```
