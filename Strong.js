let n = 145;

let sum =0;

function fact(r)
{
    let fa=1;
    while(r>1)
    {
        fa=fa*1;
    }
    return fa;
}
let temp=n;
while (temp)
{

    let d= temp%10;
    sum = sum+fact(d);
     temp=temp/10;
    
    
}
if (sum==n)
{
    console.log("Yes Strong Number");
}
else
{
    console.log("no ")
}