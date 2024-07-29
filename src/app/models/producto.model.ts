export class Producto {
    constructor() {
        this.title='';
        this.body = '';
        this.views = 0;
        this.userId = 0;
    }
    id!: number
    title: string
    body: string
    views: number
    userId: number
    reactions?: Reactions
    tags:string[]=[];
}

export class ProductoExt {
    products!: Producto[]
    total!: number
}

export class Reactions {
    likes!: number
    dislikes!: number
}
