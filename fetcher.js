// take two command line arguments
// 1) a URL
// 2) a local file path
//
// Should download resource at URL to local path on machine 
// Should pront out Downloaded and saved 1235 bytes to ./index.html (so count the bytes of file?)

// You can stream any response to a file stream.
//
// request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

// DO NOT USE PIPES - USE CALLBACK METHOD WE HAVE BEEN USING


const args = process.argv.splice(2);
const fs = require('fs');
const req = require('request');
const url = args[0];
const path = args[1];
let content = 'this should be over written';
let bytes = 0;

function reqAndWrite(request, write){ //my higher order function?
  req(url,)
}

req(url, function (error, response, body){
  console.log('error:',error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  content = body.toString();
  bytes = content.length * 8;
  // fileWrite(content);
  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${bytes} bytes to ${path}`)
  });
})



