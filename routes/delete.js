let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		console.log(req.query.id)
		let sql=`DELETE FROM  project  WHERE id="${req.query.id}"`;
		db.query(sql,(err,data)=>{
			res.redirect('/sM')
		})
	})
	return router;
};