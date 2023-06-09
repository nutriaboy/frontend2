// Generated by https://quicktype.io

export interface VentasData {
    ok:     boolean;
    total:  number;
    ventas: Venta[];
}

export interface Venta {
    estado:      boolean;
    precioTotal: number;
    usuario:     Usuario;
    createdAt:   string;
    updatedAt:   string;
    id:          string;
}

export interface Usuario {
    _id:      string;
    nombre:   string;
    apellido: string;
}
