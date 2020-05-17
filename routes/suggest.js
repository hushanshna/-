let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		   let sql=`SELECT * FROM project WHERE id="{req.query.id}"`;
		   db.query(sql,(err,data)=>{
		   	 res.render('suggest.ejs',{})
		   })
		
			
		});
	router.post('/submit',(req,res,next)=>{
		let id=req.body.id;
		let suggestion=req.body.suggestion;
		let tclass=req.body.tclass;
		let sql=`UPDATE project SET suggestion="${suggestion}",tclass="${tclass}" WHERE id="${id}"`;
		db.query(sql,(err,data)=>{
			res.redirect('/tM');
		})
	})
	
	return router;
};