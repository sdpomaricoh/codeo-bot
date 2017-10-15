var webhookController = {};

webhookController.challenge = function (req,res) {
	if(req.query['hub.verify_token']=== process.env.SECRET){
        res.send(req.query['hub.challenge']);
    }else{
        res.send('Denied !');
    }
};

module.exports = webhookController;