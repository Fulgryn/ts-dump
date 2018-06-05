//1-tablo d not
let tabNotes : number[] = [19, 15, 13.5 , 18, 7, 8];

function calculMoyenne(tab : number[]) : number{
    let somme : number = tab.reduce((s, e) => s+=e);
    return somme / tab.length;
}
console.log(calculMoyenne(tabNotes).toFixed(2));

function maxNote(tab : number[]) : number{
    let max = 0;
    for(let v of tab){
        if(v > max){
            max = v;
        }
    }
    return max;
}
console.log(maxNote(tabNotes));

function minNote(tab : number[]) : number{
    let min = 20;
    for(let v of tab){
        if(v < min){
            min = v;
        }
    }
    return min;
}
console.log(minNote(tabNotes));

function notationChange(tab : number[]) : number[]{
    let tabSur10 : number[] = tab.map(e => e/2);
    return tabSur10;
}
console.log(notationChange(tabNotes));

//2- strings ( ͡° ͜ʖ ͡°)
let str : string = "Salade de fruits, jolie, jolie";
console.log(str.slice());
console.log(str.slice(5,15));
console.log(str.slice(-9));
console.log(str.slice(12));

//3- objet nul
let PersonneNulle = {
    nom:"toto",
    prenom:"titi",
    dateNaissance:"01/02/1752",
    nomComplet : function(){
        return `${this.nom} ${this.prenom}`;
    }
};
console.log(PersonneNulle.nomComplet());

//4- objé nul mais bien
class Personne{
    nom:string;
    prenom:string;
    dateNaissance:Date;
    constructor(nom : string, prenom : string, dateNaissance : Date){
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
    nomComplet() : string{
        return `${this.nom} ${this.prenom}`;
    }
}
let Michel : Personne = new Personne("Michel","Schmorgl",new Date());
console.log(Michel.nomComplet());

//5- interrfasse
interface Surface2D{
    aire : () => number;
    perimetre : () => number;
}

class Rectangle implements Surface2D{
    largeur:number;
    longueur:number;
    constructor(a:number,b:number){
        this.largeur = a;
        this.longueur = b;
    }
    aire() : number{
        return this.largeur * this.longueur;
    }
    perimetre() : number{
        return this.largeur * 2 + this.longueur * 2;
    }
}

class Carre extends Rectangle{
    constructor(cote:number){
        super(cote,cote);
    }
}