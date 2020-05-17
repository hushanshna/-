let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
	    let sql=`SELECT * FROM project WHERE id="${req.query.id}"`;
        db.query(sql,(err,data)=>{
       	res.render('check.ejs',{})
       })
		})
	router.post('/submit',(req,res,next)=>{
		let id=req.body.id;
		let result=req.body.result;
		let sql=`UPDATE project SET result="${result}" WHERE id="${id}"`;
		db.query(sql,(err,data)=>{
			res.redirect('/xM')
		})
	})

	return router;
};