export class Noticia {
    id: number;
    titulo: string;
    fecha: string;
    longTitle: string;
    textoNoticia: string
    imagen: string;
    

    constructor(id: number = 0, titulo: string = '', fecha:string = '', longTitle: string = '', textoNoticia: string = '',
                imagen:string = 'https://i.dlpng.com/static/png/1470107-open-newspaper-png-2000_2000_preview.png') {
        this.id = 0;
        this.titulo = titulo;
        this.fecha = fecha;
        this.longTitle = longTitle;
        this.textoNoticia = textoNoticia;
        this.imagen = imagen;
        
    }
    
}