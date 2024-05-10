var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      // console.log(files)
        let oldPath = files.filetoupload[0].filepath;
        let fileName = files.filetoupload[0].newFilename;
        let newPath = "./kjsdfnksj.jpg";
        // let newPath = "./kjsdfnksj.jpg" + files.filetoupload[0].originalFilename;
console.log(files.filetoupload[0].mimetype)
        fs.rename(oldPath, newPath, (err) => {
          console.log(err)
          res.write("<h1>uploaded</h1>")
          res.end()
        })


      


    })

  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);