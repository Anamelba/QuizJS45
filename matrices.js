// *********Ejercicio 5 **************
function crearMatriz(n)
{
  var M = [];
  for(var i=0; i<n; i++)
    {
      M[i]=[];
      for(var j=0; j<n; j++)
        {
          M[i][j]=0;

        }
      M[i][n-i-1] = n;
      console.log(M[i]);
    }
}
crearMatriz(5);
