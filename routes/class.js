let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
	    let sql=`SELECT * FROM project WHERE id="${req.query.id}"`;
        db.query(sql,(err,data)=>{
       	res.render('class.ejs',{})
       })
		})
	router.post('/submit',(req,res,next)=>{
		let id=req.body.id;
		let zclass=req.body.zclass;
		let sql=`UPDATE project SET zclass="${zclass}" WHERE id="${id}"`;
		db.query(sql,(err,data)=>{
			res.redirect('/zM')
		})
	})

	return router;
};