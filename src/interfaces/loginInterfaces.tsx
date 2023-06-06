// Generated by https://quicktype.io

export interface LoginData {
    correo: string;
    password: string;
}

export interface RegisterData {
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    telefono?: string;
    direccion?: string;
    ciudad?: string;
    genero?: string;
    rut: string;
}

export interface EditData {
    id: string;
    nombre?: string;
    apellido?: string;
    correo?: string;
    password?: string;
    telefono?: string;
    direccion?: string;
    ciudad?: string;
    genero?: string;
    rut?: string;
}

export interface LoginDataResult {
    ok:      boolean;
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    rol:       string;
    estado:    boolean;
    nombre:    string;
    apellido:  string;
    correo:    string;
    rut:       string;
    telefono:  string;
    direccion: string;
    ciudad:    string;
    genero:    string;
    uid:       string;
}
