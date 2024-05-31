var express= require('express');
var router= express.Router();
const request= require('request');

const uri ="https://dog.ceo/api/breeds/image/random";

router.get('/', async(req, res) => {
    request(uri, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            const data= JSON.parse(body);
            // res.json(data);
            res.render('dog', { dog: data.message });
        }
    });
})

module.exports= router;