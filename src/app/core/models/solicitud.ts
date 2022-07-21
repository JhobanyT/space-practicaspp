import { Empresa } from './empresa';
import { Estudiante } from './estudiante';
// import { Estado } from './estado';
export interface Solicitud {
    _id:string | number;
    //estado:string;
    //estado:Array<string>;
    estado_solicitud:string[];
    //estado: Estado[]
<<<<<<< HEAD
    status: boolean;
=======
    estado: boolean;
>>>>>>> fea5c4bf944a6e567c7f23900df162c42ddd7832
    // status: 'aceptado' | 'por-verificar' | 'rechazado';
    empresa:Empresa[];
    estudiante:Estudiante[];
}
