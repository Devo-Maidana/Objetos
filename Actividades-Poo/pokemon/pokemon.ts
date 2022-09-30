
export default class Pokemon {
    private name: string 
    private type: string 
    private level: number

    constructor(name: string, type: string, level: number){
        this.name = name,
        this.type = type,
        this.level = level

    }

    attack(): void {
        console.log(`El pokemon ${this.name} está atacando!`);
    }

    levelUp(): void {
        this.level++
    }

    get getName(): string {
        return this.name
    }

    set setName(name: string) {
        this.name = name
    }

    get getType(): string {
        return this.type;
    }

    set setType(type: string) {
        this.type = type;
    }

    get getLevel(): number {
        return this.level;
    }

    