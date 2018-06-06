var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1-tableau notes
var tabNotes = [19, 15, 13.5, 18, 7, 8];
function calculMoyenne(tab) {
    var somme = tab.reduce(function (s, e) { return s += e; });
    return somme / tab.length;
}
console.log(calculMoyenne(tabNotes).toFixed(2));
function maxNote(tab) {
    var max = 0;
    for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
        var v = tab_1[_i];
        if (v > max) {
            max = v;
        }
    }
    return max;
}
console.log(maxNote(tabNotes));
function minNote(tab) {
    var min = 20;
    for (var _i = 0, tab_2 = tab; _i < tab_2.length; _i++) {
        var v = tab_2[_i];
        if (v < min) {
            min = v;
        }
    }
    return min;
}
console.log(minNote(tabNotes));
function notationChange(tab) {
    var tabSur10 = tab.map(function (e) { return e / 2; });
    return tabSur10;
}
console.log(notationChange(tabNotes));
//2- strings ( ͡° ͜ʖ ͡°)
var str = "Salade de fruits, jolie, jolie";
console.log(str.slice());
console.log(str.slice(5, 15));
console.log(str.slice(-9));
console.log(str.slice(12));
//3- objet nul
var PersonneNulle = {
    nom: "toto",
    prenom: "titi",
    dateNaissance: "01/02/1752",
    nomComplet: function () {
        return this.nom + " " + this.prenom;
    }
};
console.log(PersonneNulle.nomComplet());
//4- objet mieux
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
    Personne.prototype.nomComplet = function () {
        return this.nom + " " + this.prenom;
    };
    return Personne;
}());
var Michel = new Personne("Michel", "Schmorgl", new Date());
console.log(Michel.nomComplet());
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.largeur = a;
        this.longueur = b;
    }
    Rectangle.prototype.aire = function () {
        return this.largeur * this.longueur;
    };
    Rectangle.prototype.perimetre = function () {
        return this.largeur * 2 + this.longueur * 2;
    };
    return Rectangle;
}());
var Carre = /** @class */ (function (_super) {
    __extends(Carre, _super);
    function Carre(cote) {
        return _super.call(this, cote, cote) || this;
    }
    return Carre;
}(Rectangle));
var struct1 = {
    x: 20,
    y: 10
};
console.log(struct1);
var struct2 = {
    x: 40,
    y: 20,
    rayon: 120
};
console.log(struct2);
//7- EnUm
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Purple"] = 4] = "Purple";
    Color[Color["Orange"] = 5] = "Orange";
    Color[Color["Pink"] = 6] = "Pink";
})(Color || (Color = {}));
var colNb = Color.Yellow;
var col = Color.Green;
console.log(col);
console.log(Color[colNb]);
//8- tableau
var tabVal = [15, 50, 48, 42, 55, 189];
console.log(tabVal);
var tabVal2 = [15, 50, 48, 42, 55, 189];
console.log(tabVal2);
var tabVal3 = [1, true, "three"];
console.log(tabVal3);
var tabVal4;
console.log(tabVal4);
//9- 
var myUnionVar;
console.log('myUnionVar before setting a value = ' + myUnionVar);
myUnionVar = 5;
console.log('typeof myUnionVar = ' + typeof myUnionVar);
var unionVar2;
unionVar2 = 2;
console.log('typeof unionVar2 = ' + typeof unionVar2);
unionVar2 = [2, 58, 45, 12];
console.log('typeof unionVar2 = ' + typeof unionVar2);
