let boo : boolean = true;
let nb : number = 1;
let str : string = "hello";
console.log(str + boo + nb);
console.log(parseInt('123 est un nombre'));
let toto = str.slice(-3); //prend les 3 derniers
console.log(toto);
console.log(toto.split(' '));

let tab : number[] = [];
let tabObject : Array<number> = [];
tab = [1,2,3,4,5];
for(let i = 0; i < tab.length; i++){
    console.log(tab[i]);
}
for(let i in tab){
    console.log(i); //i = les index
}
for(let i of tab){
    console.log(i); // i = les valeurs
}
tab.forEach((e, i) => console.log(i+" "+e));
let somme : number = tab.reduce((s, e) => s+=e);
console.log(somme);
let tabCarre : number[] = tab.map(e => Math.pow(e, 2));
console.log(tabCarre);
tab.push(0);
//destructuration
let a = 0;
let b = 4;
[a,b] = [b,a];
console.log("a "+a+" b "+b);
let[d, e, ...autres] = [0, 9, 4, 5];
//d = 0
//e = 9
//autres = [4, 5]
function carre(x: number) : number{
    return Math.pow(x,2);
}
let carreLambda = (x : number) => Math.pow(x,2);
console.log(carre(2)+ " version lambda " +carreLambda(2));

function puissance(x : number, y? : number) : number{
    if(y === undefined){
        return x;
    }
    return Math.pow(x,y);
    // return y === undefined ? x : Math.pow(x,y);
}

let sommeIndefinie = (x: number, ...autres : number[]) => autres.reduce((s,e) => s +=e) +x;
console.log(sommeIndefinie(3,1,2,20));

/*
let tel = new Map<string, number>();
tel.set("toto",123);
console.log(tel.get("toto"));*/

enum monEnum{A, B, C};
let en : monEnum = monEnum.A;

// objet libéraux
let totoObject = {
    nom:"toto",
    prenom:"titi",
    affiche : function(){
        return `${this.nom} ${this.prenom}`;
    }
};
console.log(totoObject.affiche());
class Personne{
    nom:string;
    prenom:string;
    constructor(nom : string, prenom : string){
        this.nom = nom;
        this.prenom = prenom;
    }

    affiche() : string{
        return `${this.nom} ${this.prenom}`;
    }
}

let Paul : Personne = new Personne("paul","toto");
console.log(Paul.affiche());

interface Figure{
    aire : () => number;
}

class Rectangle implements Figure{
    largeur:number;
    longueur:number;
    constructor(a:number,b:number){
        this.largeur = a;
        this.longueur=b;
    }
    aire() : number{
        return this.largeur * this.longueur;
    }
}

class Carre extends Rectangle{
    constructor(cote:number){
        super(cote,cote);
    }
}