const sass = require('sass');
const utils = require('./utils');

const PACKAGE_NAME = process.env.npm_package_name.split('/')[1];
const DIST = `./dist/css/${PACKAGE_NAME}`;
const FILE = './src/root.scss';

function css(){
  const result = sass.compile(FILE);
  const min = sass.compile(FILE,{style:'compressed'});
  utils.saveFile(`${DIST}.css`,result.css);
  utils.saveFile(`${DIST}.min.css`,min.css);
}
css();
