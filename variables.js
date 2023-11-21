/*comando de entrada*/
var cmd; 
var cmds;

/*aqui se almacena la info*/
var arrayGuia = new Array();
var arrayMaterial = new Array(); 
var arraySeccion = new Array(); 
var arrayPunto = new Array(); 
var arrayElemento = new Array(); 
var arrayDesplazamiento = new Array(); 
var arrayFuerza = new Array(); 
var arrayCarga = new Array(); 
var arrayCuerpo = new Array(); 

/*contadores de almacenamiento de datos*/
var g = 0;
var m = 0;
var s = 0;
var p = 0;
var b = 0; /*elemento*/
var d = 0;
var n = 0; /*fuerza*/
var q = 0;
var c = 0;

/*variables de escala de visualizacion*/
var B = 0;
var H = 0;
var es = 1; 
var dx = 0;
var dy = 0;
var ef = 1; /*escala de la fuerza*/
var sf; /*signo de la fuerza*/
var sq = 1; /*escala de carga*/
var sq; /*signo de carga*/

/*---Dibujo Primitivas---*/
var valor;
var abcisa;
var ordenada;
var pA;
var pB;
var pC;
var pD;
var lg;

/*---Dibujo Punto---*/
var xp1 = 0;
var yp1 = 0;

/*---Dibujo Elemento---*/
var xe1 = 0;
var ye1 = 0;
var xe2 = 0;
var ye2 = 0;


/*---Constador de posicion CRUD*/
var pos = 0;
var t1;
var t2;
var t3;

/*---KUF---*/
var E;
var A;
var I;
var L;
var C;
var S;

var ce = new Array();
var ke;

var Mi0;
var Mj0;
var Vi0;
var Vj0;
var Pi0;
var Pj0;

var vec = new Array();
var ved = new Array();

var Kcc = new Array();
var Kcd = new Array();
var Kdc = new Array();
var Kdd = new Array();
var Uc = new Array();
var Ud = new Array();
var Fd = new Array();
var Fc = new Array();

var Fmv = new Array();
var Fr1 = new Array();
var Fr2 = new Array();

var ui;
var vi;
var wi;
var uj;
var vj;
var wj;

var Pi;
var Vi;
var Mi;
var Pj;
var Vj;
var Mj;

var Vres = new Array();