import axios from 'axios';
import toast from 'react-hot-toast';

const BINA_URL = 'https://binahria.com.mx/mailer/suscripcion.php'
const HEADERS = {
        'api-key': 'e2325ad7', 
        'Accept': 'application/json',
    };


    export const sendEmail = async(data) => {
        await axios.post(BINA_URL, {data}, {headers: HEADERS})
        .then((res) => {
            toast.success(res.resultado);
        })
        .catch((err)=> {
            toast.error("Error al Enviar Correo")
            console.log(err);
        })
    }