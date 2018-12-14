export class Pokemon {
    id: number;
    name: string;
    spriteUrl: string;
    type1: string;
    type2: string;
    move1: string;
    move2: string;

    constructor(id, name, spriteUrl, type1, type2, move1, move2){
        this.id = id;
        this.name = name;
        this.spriteUrl = spriteUrl;
        this.type1 = type1;
        this.type2 = type2;
        this.move1 = move1;
        this.move2 = move2;
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

    getType1() {
        return this.type1;
    }

    getType2() {
        return this.type2;
    }

    getMove1(){
        return this.move1;
    }

    getMove2(){
        return this.move2;
    }
}