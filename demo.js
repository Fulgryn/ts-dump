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
var _a;
var boo = true;
var nb = 1;
var str = "hello";
console.log(str + boo + nb);
console.log(parseInt('123 est un nombre'));
var toto = str.slice(-3); //prend les 3 derniers
console.log(toto);
console.log(toto.split(' '));
var tab = [];
var tabObject = [];
tab = [1, 2, 3, 4, 5];
for (var i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}
for (var i in tab) {
    console.log(i); //i = les index
}
for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
    var i = tab_1[_i];
    console.log(i); // i = les valeurs
}
tab.forEach(function (e, i) { return console.log(i + " " + e); });
var somme = tab.reduce(function (s, e) { return s += e; });
console.log(somme);
var tabCarre = tab.map(function (e) { return Math.pow(e, 2); });
console.log(tabCarre);
tab.push(0);
//destructuration
var a = 0;
var b = 4;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a " + a + " b " + b);
var _b = [0, 9, 4, 5], d = _b[0], e = _b[1], autres = _b.slice(2);
//d = 0
//e = 9
//autres = [4, 5]
function carre(x) {
    return Math.pow(x, 2);
}
var carreLambda = function (x) { return Math.pow(x, 2); };
console.log(carre(2) + " version lambda " + carreLambda(2));
function puissance(x, y) {
    if (y === undefined) {
        return x;
    }
    return Math.pow(x, y);
    // return y === undefined ? x : Math.pow(x,y);
}
var sommeIndefinie = function (x) {
    var autres = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        autres[_i - 1] = arguments[_i];
    }
    return autres.reduce(function (s, e) { return s += e; }) + x;
};
console.log(sommeIndefinie(3, 1, 2, 20));
/*
let tel = new Map<string, number>();
tel.set("toto",123);
console.log(tel.get("toto"));*/
var monEnum;
(function (monEnum) {
    monEnum[monEnum["A"] = 0] = "A";
    monEnum[monEnum["B"] = 1] = "B";
    monEnum[monEnum["C"] = 2] = "C";
})(monEnum || (monEnum = {}));
;
var en = monEnum.A;
// objet libéraux
var totoObject = {
    nom: "toto",
    prenom: "titi",
    affiche: function () {
        return this.nom + " " + this.prenom;
    }
};
console.log(totoObject.affiche());
var Personne = /** @class */ (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Personne.prototype.affiche = function () {
        return this.nom + " " + this.prenom;
    };
    return Personne;
}());
var Paul = new Personne("paul", "toto");
console.log(Paul.affiche());
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.largeur = a;
        this.longueur = b;
    }
    Rectangle.prototype.aire = function () {
        return this.largeur * this.longueur;
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
