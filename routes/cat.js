varexpress= require('express');
varrouter= express.Router();
constrequest= require('request');
router.get('/', async(req, res) =>{
request('https://api.thecatapi.com/v1/images/search', function(error, response, body) {
if(!error&& response.statusCode== 200) {
constdata= JSON.parse(body);
res.json(data);
}
});
})
module.exports= router;