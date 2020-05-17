let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		res.render('index.ejs',{})
	})
	return router;
};