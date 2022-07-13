let n=370;
let d;
let a=0;
let temp = n;
while (temp!=0)
{
    d= temp%10;
     a = a+d*d*d;
    temp=parseInt(temp/10);
}
if(a == n)
{
    console.log("Armstrong number" +a);
}
else
{
    console.log("Not Armstrong number " +a);
}