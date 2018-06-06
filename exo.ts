//1-tableau notes
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

//4- objet mieux
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

//5- interface
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

//6- interface INSTANCIABLE
interface maStructureDeDonnees{
    x : number;
    y : number;
    rayon? : number;
}

let struct1 : maStructureDeDonnees = {
    x: 20,
    y: 10
}
console.log(struct1);
let struct2 : maStructureDeDonnees = {
    x: 40,
    y: 20,
    rayon: 120
}
console.log(struct2);

//7- EnUm
enum Color{ "Blue", "Red", "Green", "Yellow", "Purple", "Orange", "Pink"}
let colNb : number = Color.Yellow;
let col : Color = Color.Green;
console.log(col);
console.log(Color[colNb]);

//8- tableau
let tabVal : number[] = [15, 50, 48, 42, 55, 189];
console.log(tabVal);
let tabVal2 = [15, 50, 48, 42, 55, 189];
console.log(tabVal2);
let tabVal3 = [1, true, "three"];
console.log(tabVal3);
let tabVal4 : string[10];
console.log(tabVal4);

//9- 
var myUnionVar: string | number | boolean;
console.log('myUnionVar before setting a value = ' + myUnionVar);
myUnionVar = 5;
console.log('typeof myUnionVar = ' + typeof myUnionVar);
let unionVar2 : number | number[];
unionVar2 = 2;
console.log('typeof unionVar2 = ' + typeof unionVar2);
unionVar2 = [2, 58, 45, 12];
console.log('typeof unionVar2 = ' + typeof unionVar2);