export class Consulta {
    nombre: string;
    apellidos: string;
    telefono: number;
    email: string;
    contactar: boolean;
    tipocontacto: string;
    mensaje: string;
};
export const TipoContacto = ['Ninguno', 'Teléfono', 'Email'];