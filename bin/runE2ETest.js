#!/usr/bin/env node

const { version } = require('../package.json')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const ROOT_DIR = path.resolve(__dirname, '../')
const exampleDirNames = fs.readdirSync(path.resolve(ROOT_DIR, 'examples'))

// Update version numbers in package.json
exampleDirNames.forEach((exampleDirName) => {
  const pPath = path.resolve(ROOT_DIR, 'examples', exampleDirName, 'package.json')
  const pContent = require(pPath)
  if (pContent.dependencies['redux-mini-form'] !== version) {
    pContent.dependencies['redux-mini-form'] = version
    fs.writeFileSync(pPath, JSON.stringify(pContent, null, 2), 'utf-8')
  }
})

// Run functional test for examples
exampleDirNames.forEach((exampleDirName) => {
  const dirPath = path.resolve(ROOT_DIR, 'examples', exampleDirName)
  execSync(`cd ${dirPath} && npm i && npm run ci`, {stdio: 'inherit'})
})
