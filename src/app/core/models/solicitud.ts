import { Empresa } from './empresa';
import { Estudiante } from './estudiante';
// import { Estado } from './estado';
export interface Solicitud {
    _id:string | number;
    //estado:string;
    //estado:Array<string>;
    estado_solicitud:string[];
    //estado: Estado[]
    status: boolean;
    // status: 'aceptado' | 'por-verificar' | 'rechazado';
    empresa:Empresa[];
    estudiante:Estudiante[];
}
