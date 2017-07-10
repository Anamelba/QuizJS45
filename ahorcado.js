var i=0;
var k=0;
var res = []
for(var a=0;a<palabra.length;a++)
{
  res[i] += "*";
}
while(i<matriz(hombre).length)
{
  for(var j=0; j<palabra.length;j++)
  {
    if(palabra[j] != letra)
    {
      if(res[j]!="*")
      {
          res[j] = palabra[j];
          //console.log(res[j]);
      }
      else
      {
        res[j] = "*";
        //console.log(res[j]);
      }
    }
    else
    {
      k++;
      res[j]+=letra;
      //console.log(res[j]);
    }
  }
  if(k==0)
  {
    console.log(hombre[i]);
    i++;
  }
  if(res==palabra)
  {
    i=palabra.length;
  }
  console.log(res[j]);
}
if(res==palabra)
console.log("Felicidades ganaste");
else {
  console.log(":( perdiste!...Vuelve a intentarlo)");
}
