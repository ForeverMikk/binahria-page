import axios from 'axios';
import toast from 'react-hot-toast';

const BINA_URL = 'https://binahria.com.mx/mailer/suscripcion.php'
const HEADERS = {
        'api-key': '33cde18a', 
        'Accept': 'application/json',
    };


    export const sendEmail = async(data) => {
        console.log('send service')
        await axios.post(BINA_URL, {data}, {headers: HEADERS})
        .then((res) => {
            console.log(res);
            toast.success(res.data.resultado);
        })
        .catch((err)=> {
            toast.error("Error al Enviar Correo")
            console.log(err);
        })
    }