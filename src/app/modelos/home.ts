export class Home {
//corresponde al objeto bienvenida
    id_bienvenida: number;
    mensaje: string;
    titulo: string;

    constructor(_id_bienvenida: number,
                _mensaje: string,
                _titulo: string) {


        this.id_bienvenida = _id_bienvenida;
        this.mensaje = _mensaje;
        this.titulo = _titulo;
    }


}
