// Generated by https://quicktype.io

export interface Sub {
    ok:         boolean;
    suscriptor: Suscriptor;
}

export interface Suscriptor {
    estado:       boolean;
    usuario:      Usuario;
    idSuscriptor: string;
}

export interface Usuario {
    _id:      string;
    nombre:   string;
    apellido: string;
}
