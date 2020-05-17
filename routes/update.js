let express=require('express');
module.exports=(db)=>{
	let router=express.Router();

	router.get('/',(req,res,next)=>{
		let sql=`SELECT * FROM project WHERE id="${req.query.id}"`;
		db.query(sql,(err,data)=>{
			console.log(data)
			res.render('update.ejs',{update:data[0]});
		})
	});
	router.post('/submit',(req,res,next)=>{
		let id=req.body.id;
        let proname=req.body.proname;
		let startdata=req.body.startdata;
		let enddata=req.body.enddata;
		let fzname=req.body.fzname;
		let detail=req.body.detail;
		let money=req.body.money;
		let sql2=`UPDATE project SET proname="${proname}",startdata="${startdata}",enddata="${enddata}",fzname="${fzname}",detail="${detail}",money="${money}" WHERE id="${id}"`;
		db.query(sql2,(err,data)=>{
			console.log(data);
			res.redirect('/sM');
		})
	})
	
	
	
	return router;
};