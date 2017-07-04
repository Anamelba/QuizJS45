// EJERCICIO 2 *************************
function quiz2(n)
{
  for (var i = n-1; i >= 0; i--)
  {
    var s = "";
    for (var j = 1; j <= i + 1; j++)
    {
      s += j;
    }
    console.log(s);
  }
}
quiz2(5);
