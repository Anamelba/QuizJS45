//EJERCICIO 1
function maxMin(a,b,c)
{
  var max;
  var min;
  if(a<b)
    {
      if(a<c)
        {
          min = a;
          if(b>c)
            {
              max = b;
            }
          else
            {
              max = c;
            }
        }
      else
        {
          min = c;
          max = b;
        }
    }
      else
        {
          if(a>c)
            {
              max =a;
              if(b>c)
                {
                  min = c;
                }
              else
                {
                  min = b;
                }
            }
              else
                {
                  min = b;
                  max = c;
                }

        }


  return "Maximo: " + max + " Minimo: " + min;
}
console.log(maxMin(2,1,3));

//EJERCICIO 2
function indice(arr)
{
  var par, impar;
  var resPar = " ";
  var resImpar = " ";
  for(var i=0; i<arr.length ; i++)
    {
      if(i%2 == 0)
        {
          par = arr[i];
          resPar += par + " ";
        }
      else
        {
          impar = arr[i];
          resImpar += impar + " ";
        }
    }
 return "Elementos de posición par: " + resPar + " Elementos de posición impar: " + resImpar;

}
console.log(indice([15, 29, 78, 29, 40, 20, 18, 100, 78, 68]));
//EJERCICIO 3
function invertir(arr)
{
  var res=" ";
  var invertida = arr.reverse();
  for(var i in invertida)
    {
      res += invertida[i] + " ";
    }
  return res;
}
console.log(invertir([1,2,3,4,5,6,7,8,9,0]));
//EJERCICIO 4
function espacios(n)
{
  var s = "_"
  for(var i=0; i<n; i++)
    {
      espacios += "_";
    }
  return espacios;

}
for(var i=0; i<n; i++)
  {
    var sp = espacios (n-(i+1));
    var content = "";
    for(var j=0; j<i+1; j++)
      {
        content += j;
      }
    console.log(sp + content);
  }
