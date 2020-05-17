let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		res.render('login.ejs',{});
	});
	router.post('/submit',(req,res,next)=>{
		let username=req.body.username;
		let password=req.body.password;
		let sql=`SELECT * FROM user WHERE username="${username}" AND password="${password}"`;
		db.query(sql,(err,data)=>{
			if(data.length>0){
				req.session['name_id']=username+"_"+data[0].ID;
				res.redirect('/');
			}else{
				res.redirect('/reg')
			}
		})
	})
	return router;
};