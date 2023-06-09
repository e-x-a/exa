const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

const {
  glob,
  globSync,
  globStream,
  globStreamSync,
  Glob,
} = require('glob');

async function globPath(match,options){
  return new Promise(async (resolve,reject)=>{
    let result = await glob(match,options);
    resolve(result);
    /*
    glob(match, options, async function (er, files) {
      resolve(files);
    });
    */
  });
}

async function saveFile(destination, data){
  return new Promise(async function(resolve, reject){
    fse.ensureDir(path.dirname(destination))
    .then(() => {
      fs.writeFile(destination, data, (err) => {
        if(err){
          console.log(err.red);
          reject(err);
        }else{
          resolve(destination);
        }
      });
    })
    .catch((error)=>{
      console.log('saveFile : ensureDir error => ', error);
    })

  });
}

exports.glob = globPath;
exports.saveFile = saveFile;
