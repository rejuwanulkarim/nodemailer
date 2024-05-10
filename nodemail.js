const mailer = require("nodemailer")
const http = require("http")
const url = require("url")

http.createServer((req, res) => {
    const parser = url.parse(req.url, true);
    if (parser.pathname == "/sendmail") {
        let email = parser.query.email
        let sendTxt = parser.query.msg

        const transporter = mailer.createTransport({
            service: "gmail",
            auth: {
                user: "karimdr341@gmail.com",
                pass: "thce okzc fodg wcrb"
            }
        })
        const mailOpt = {
            from: "test@gmail.com",
            to: email,
            subject: "NodeMailer Mail",
            text: sendTxt
        }

        transporter.sendMail(mailOpt, function (err, info) {
            if (err) throw err;
            res.write("<h1>Sended</h1>")
            res.end()
        })






    } else {

        res.write("<h1>Hello</h1>")
        res.end()
    }
}).listen(8080)











