import  express  from 'express';
import bodyParser from 'body-parser'
import AuthRouter from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req,res) => {

    res.send('eğitim budur rest API')
    
});

// app.post('/', (req,res) =>{

//     console.log(req.body)
//     res.send(req.body.email);
// })


app.listen(3300, () =>{
    console.log('Server has been started')
})


//npm start her defasında yazmamak için nodemondan faydalanıyoruz.