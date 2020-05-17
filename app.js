let express=require('express');
let bodyParser=require('body-parser');
let multer=require('multer');
let consolidate=require('consolidate');
let mysql=require('mysql');
let cookieSession=require('cookie-session');
let app=express();
app.listen(3000);
app.use(express.static('./www'));
app.use(bodyParser());
let arr=[];
for(var i=0;i<1000;i++){
	arr[i]="bw"+Math.random();
}
app.use(cookieSession({
	keys:arr,
	name:'haha',
	maxAge:10000
}));
let multerObj=multer({dest:'./www/upload'});
app.use(multerObj.any());
app.set('view.engine','html');
app.set('views','./views');
app.engine('html',consolidate.ejs);
let db=mysql.createPool({
	host:'localhost',
	port:3306,
	user:'root',
	password:'123456',
	database:'newsapp'
});
app.use('/',require('./routes/home')(db));
app.use('/login',require('./routes/login')(db));
app.use('/reg',require('./routes/reg')(db));
app.use('/zM',require('./routes/zM')(db));
app.use('/xM',require('./routes/xM')(db));
app.use('/tM',require('./routes/tM')(db));
app.use('/sM',require('./routes/sM')(db));
app.use('/update',require('./routes/update')(db));
app.use('/delete',require('./routes/delete')(db));
app.use('/suggest',require('./routes/suggest')(db));
app.use('/class',require('./routes/class')(db));
app.use('/check',require('./routes/check')(db));