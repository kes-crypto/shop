const HOST = '0.0.0.0';
const PORT = process.env.PORT || 2000;
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/success', function (req, res) {
    res.render('success');
});

app.post('/index/send', function (req, res){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'nobswendo@gmail.com',
            pass: 'nobswendo'
        }
    });

    var mailOptions = {
        from: 'dennis kestone <denniskestone@gmail.com>',
        to: 'denniskestone@gmail.com',
        subject: 'Website Submission',
        text: 'A customer has made a purchase with the following details...Delivery Address:'+ req.body.address +' Phone Number:'+ req.body.number +' Goods bought: '+ req.body.cart + 'Total:' +req.body.total+ req.body.mail + "has subscribed",
        html: '<p>A customer has made a purchase with the following details...</p><ul><li>Delivery Address:'+ req.body.address +'</li><li>Phone Number:'+ req.body.number +'</li><li>Goods bought:'+ req.body.cart +'</li><li>Total:'+ req.body.total +'</li></ul><li>'+ req.body.mail +':has subscribed.</li>' 
     };
     transporter.sendMail(mailOptions, function(error, info){
         if(error){
             console.log(error);
             res.redirect('/success');
         } else {
                console.log('Message sent.' );
                res.render.alert("sent succesfully");
                res.redirect('/success');
         }
     });
     console.log('sent');
});

app.listen(PORT, function(){
    console.log(`Our app is running on port ${ PORT }`);
});