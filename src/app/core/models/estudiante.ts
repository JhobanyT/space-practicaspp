import { Persona } from "./persona";

export interface Estudiante {
    _id:string | number;
    ciclo:string;
    persona:Persona;
}