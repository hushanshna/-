let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		let sql=`SELECT * FROM project`;
		db.query(sql,(err,data)=>{

			res.render('studentManage.ejs',{student:data});
		})
	})
	router.post('/submit',(req,res,next)=>{
		let id=req.body.id;
		let proname=req.body.proname;
		let startdata=req.body.startdata;
		let enddata=req.body.enddata;
		let fzname=req.body.fzname;
		let detail=req.body.detail;
		let money=req.body.money;
		let sql2=`INSERT INTO project(id,proname,startdata,enddata,fzname,detail,money) VALUES("${id}","${proname}","${startdata}","${enddata}","${fzname}","${detail}","${money}")`; 
		db.query(sql2,(err,data)=>{
			res.redirect('/sM')
		})
	})
	
	return router;
};