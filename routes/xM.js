let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		let sql=`SELECT * FROM project`;
		db.query(sql,(err,data)=>{

			res.render('schoolManage.ejs',{school:data});
		})
	});
	router.post('/submit',(req,res,next)=>{
		//let result=req.body.result;
		//let sql2=`INSERT INTO xuexiao(result) VALUES("${result}")`; 
		
		
		db.query(sql2,(err,data)=>{
			res.render('schoolManage.ejs',{});
			
		})
	})
	return router;
};