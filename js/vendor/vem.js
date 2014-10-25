/* I did this little electric poem generator on 2005 :_) */

/*
   FILE ARCHIVED ON 9:19:14 Jan 25, 2005 AND RETRIEVED FROM THE
   INTERNET ARCHIVE ON 15:30:35 Oct 25, 2014.
   JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

   ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
   SECTION 108(a)(3)).
   */
// VivoExquisito-o-Matic (version 2.0)
// El Hombre que Comía Diccionarios - www.elhombrequecomiadiccionarios.com

var i=0
var frase  = new Array()

frase[0]="El agua es aqu&iacute; de un xadjetivoMS tan intenso que no veo el agua"
frase[1]="No hay nada"
frase[2]="&iquest;Ser&eacute; capaz de lograrlo?"
frase[3]="Infinitud xadjetivoFS, xadjetivoFS memoria de los d&iacute;as"
frase[4]="Aqu&iacute; est&aacute;s a salvo de ti"
frase[5]="Avanza hacia el horizonte para convertirte en ballena"
frase[6]="Escucha: no existe el Ayer"
frase[7]="El sol"
frase[8]="Como el xadjetivoMS sonido del Mar"
frase[9]="Perdido en el laberinto de sal"
frase[10]="El Mar"
frase[11]="Las gaviotas susurran acu&aacute;ticas melod&iacute;as"
frase[12]="Nunca"
frase[13]="S&iacute;"
frase[14]="Dispuesto a desaparecer"
frase[15]="Vete"
frase[16]="Qu&eacute;date"
frase[17]="La memoria permanece"
frase[18]="Devorado por estatuas del color de la arena"
frase[19]="Pero ahora no soy nada."
frase[20]="Descubre que est&aacute;s perdido"
frase[21]="La derrota final se esconde entre rocas xadjetivoFP"
frase[22]="&iquest;Qui&eacute;n eres?"
frase[23]="&iquest;Qui&eacute;n soy yo?"
frase[24]="Me das miedo"
frase[25]="Me doy miedo"
frase[26]="Esto no est&aacute; pasando"
frase[26]="Esto no est&aacute; ocurriendo"
frase[27]="La visi&oacute;n xadjetivoFS"
frase[28]="No trates de huir"
frase[29]="Huye"
frase[30]="No lo intentes. Vete"
frase[31]="Int&eacute;ntalo. Hazlo ahora"
frase[32]="La verdad te espera donde acaba la orilla"
frase[33]="Esto es el fin"
frase[34]="Es aqu&iacute; donde rompen las olas"
frase[35]="El tiempo es arena"
frase[36]="La arena es tiempo"
frase[37]="El Mar"
frase[38]="El Mar: Universo salado"
frase[39]="Devorado por estatuas del color de la arena"
frase[40]="Soy incapaz de huir"
frase[41]="All&iacute;, bajo las estrellas, era capaz de todo"
frase[42]="Mira, los peces naranjas nos saludan"
frase[43]="Ya no hay barcos piratas, s&oacute;lo hay piratas"
frase[44]="V&oacute;rtices, V&oacute;rtices, V&oacute;rtices"
frase[45]="&iquest;Por qu&eacute; no me entierras en la arena?"
frase[46]="&iquest;Cu&aacute;l es el secreto que las olas arrastran?"
frase[47]="La clave est&aacute; en el Mar"
frase[48]="Yo soy las olas"
frase[49]="T&uacute; eres el Mar"
frase[50]="Han venido a buscarte, pero t&uacute; no estabas aqu&iacute;"
frase[51]="Soy el xadjetivoMS rey de las olas"
frase[52]="Veo delfines xadjetivoMP que ven delfines xadjetivoMP que te ven a ti"
frase[53]="Los cangrejos xadjetivoMP me lanzan hacia las rocas"
frase[54]="Quieren matarme"
frase[55]="El Oc&eacute;ano quiere matarte"
frase[56]="Quieren matarte"
frase[56]="Soy el Mar"
frase[57]="Eres el Mar"
frase[58]="Mis xadjetivoMP zapatos me han destruido"
frase[59]="Tengo fr&iacute;o"
frase[60]="Como xadjetivoMP p&aacute;jaros de viento que graznan mi Destino"
frase[61]="Ahora es Mañana"
frase[62]="Mañana es Nadie"
frase[63]="Nadie es mi nombre"
frase[64]="Un sueño"
frase[65]="Mi isla"
frase[66]="Yo soy el Mar"
frase[67]="Quiz&aacute; es mejor no mirar atr&aacute;s"

var adjetivo  = new Array()
adjetivo[0] = new Array ("rojo", "rojos", "roja", "rojas")
adjetivo[1] = new Array ("verde", "verdes", "verde", "verdes")
adjetivo[2] = new Array ("azul", "azules", "azul", "azules")
adjetivo[3] = new Array ("amarillo", "amarillos", "amarilla", "amarillas")
adjetivo[4] = new Array ("blanco", "blancos", "blanca", "blancas")
adjetivo[5] = new Array ("negro", "negros", "negra", "negras")
adjetivo[6] = new Array ("gris", "grises", "gris", "grises")
adjetivo[7] = new Array ("bonito", "bonitos", "bonita", "bonitas")
adjetivo[8] = new Array ("malvado", "malvados", "malvada", "malvadas")
adjetivo[9] = new Array ("muerto", "muertos", "muerta", "muertas")
adjetivo[10] = new Array ("triste", "tristes", "triste", "tristes")
adjetivo[11] = new Array ("cansado", "cansados", "cansada", "cansadas")
adjetivo[12] = new Array ("roto", "rotos", "rota", "rotas")
adjetivo[13] = new Array ("claro", "claros", "clara", "claras")
adjetivo[14] = new Array ("oscuro", "oscuros", "oscura", "oscuras")
adjetivo[15] = new Array ("naranja", "naranjas", "naranja", "naranjas")
adjetivo[16] = new Array ("herido", "heridos", "herida", "heridos")
adjetivo[17] = new Array ("inmóvil", "inmóviles", "inmóvil", "inmóviles")
adjetivo[18] = new Array ("oculto", "ocultos", "oculta", "ocultas")
adjetivo[19] = new Array ("alado", "alados", "alada", "aladas")
adjetivo[20] = new Array ("destructor", "destructores", "destructora", "destructoras")
adjetivo[21] = new Array ("anulador", "anuladores", "anuladora", "anuladoras")

function randomNum(max) 
{
  var rNum=NaN
  while (isNaN(rNum))rNum=Math.floor(Math.random()*(max))
    return rNum
}

function replace(cadena) 
{ 
  var pos
  var patron

  if (patron = cadena.match("xadjetivoMS")) pos = 0;
  else if (patron = cadena.match("xadjetivoMP")) pos = 1;
  else if (patron = cadena.match("xadjetivoFS"))	pos = 2;
  else if (patron = cadena.match("xadjetivoFP")) pos = 3;

  rExp = patron;

  results = cadena.replace(rExp, adjetivo[randomNum(adjetivo.length)][pos])

  if (cadena.match("xadjetivo")) replace(results)

    return results
}

function imprimeFrase()
{
  return replace(frase[randomNum(frase.length)]);
}






