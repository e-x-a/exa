const concat = require('concat');
const utils = require('./utils');
const uglify = require("uglify-js");

const PACKAGE_NAME = process.env.npm_package_name;
const DIST_FILE = `./dist/js/${PACKAGE_NAME}`;

async function init(){
  let match = './src/**/*(*.element.js|*.event.js)';
  let js = await globAndConcat(match);
  let min = uglify.minify(js);
  utils.saveFile(`${DIST_FILE}.js`,js);
  utils.saveFile(`${DIST_FILE}.min.js`,min.code);
}
init();

async function globAndConcat(match){
  return new Promise((resolve,reject)=>{
    utils.glob(match,{})
    .then((files)=>{
      concat(files).then((js)=>{
        resolve(js);
      });
    })
  })
}
