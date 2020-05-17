let express=require('express');
module.exports=(db)=>{
	let router=express.Router();
	router.get('/',(req,res,next)=>{
		res.render('reg.ejs',{})
	})
	router.post('/submit',(req,res,next)=>{
		let username=req.body.username;
		let password=req.body.password;
		let sql=`SELECT * FROM user WHERE username="${username}" AND password="${password}"`;
		db.query(sql,(err,data)=>{
			if(data.length==0){
				let sql2=`INSERT INTO user(ID,username,password) VALUES(0,"${username}","${password}")`;
				db.query(sql2,(err,data)=>{
					res.redirect('/login');
				})
			}else{
				console.log('阿湿波')
			}
		})
	})
	return router;
};