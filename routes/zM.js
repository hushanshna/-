let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		let sql=`SELECT * FROM project`;
		db.query(sql,(err,data)=>{
			res.render('zjManage.ejs',{speclia:data})
		})
	})
	return router;
};