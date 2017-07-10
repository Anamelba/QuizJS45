function imprimirMatriz (M)
{
  var n = M.length;
  for (var i = 0; i < n; i++)
  {
        console.log(M[i]) ;
  }
}

function obtenerPalabraSecreta()
{
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];
   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
   return palabra;
}

function strcmp(a, b) {
    a = a.toString(), b = b.toString();
    for (var i=0,n=Math.max(a.length, b.length); i<n && a.charAt(i) === b.charAt(i); ++i);
    if (i === n) return 0;
    return a.charAt(i) > b.charAt(i) ? -1 : 1;
}

var hombre =  [        "________",
                       "   |\n",
                       "   |\n",
                       "   |\n",
                       "   O\n",
                        "  /|\\\n",
                       "  / \\\n",
                       "         ",
                       "         ",
                       "________"];
var palabra = obtenerPalabraSecreta();
  console.log(palabra);

  var i=0;
  var res=[];

  for(var a=0 ; a<palabra.length; a++)
  {
    res[a] = "*";
  }
  console.log(res);
  var s = "";
  while(i < hombre.length)
  {
    var k=0;
    var letra = prompt(res + "\n" +  s + "\n" +  "Ingrese una letra: ");
    for(var j=0; j<palabra.length; j++)
    {
      if(palabra[j] != letra)
      {
        if(res[j]!="*")
        {
           //res[j] = letra;
         }
         else
        {
          res[j] = "*";
        }
      }
      else
      {
        k++;
        res[j]=letra;
      }
    }
    s = "";
    for(var c=0; c <= i; c++)   {
        s += hombre[c];
    }
    console.log(res);
    console.log(palabra);

    if(strcmp(res, palabra) == 0)
       break;
    i++;
  }
  if(strcmp(res, palabra) == 0)
    {
      console.log("Felicidades ganaste");
    }
else
  {
    console.log(":( perdiste!...Vuelve a intentarlo");
  }
