export class Pokemon {
    id: number;
    name: string;
    spriteUrl: string;

    constructor(id, name, spriteUrl){
        this.id = id;
        this.name = name;
        this.spriteUrl = spriteUrl;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.spriteUrl;
    }
}