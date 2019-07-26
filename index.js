import app from './app';

app.listen(app.get('port'), ()=>{
    console.log(`app runing on port 3000 ${app.get('port')}`);
});