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
        const response = {
            statuscode: 200,
            status: "success",
            msg: "Your email has been sended successfully"
        }
        console.log("Sending");
        transporter.sendMail(mailOpt, function (err, info) {
            if (err) throw err;
            res.write(JSON.stringify(response))
            // res.write("<h1>response</h1>")
            console.log("sended success")
            res.end()
        })






    } else {

        res.write("<h1>Hello</h1>")
        res.end()
    }
}).listen(80)











