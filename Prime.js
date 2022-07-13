let n;
let i;
for(n=1;n<=1000;n++)
{ 
    count=0;
    for(i=2;i<n;i++)
    {
        if(n%i==0)
        {
            count++;
            break;
        }
    }
    if(count == 0 && n>1)
    {
        console.log("prime Number " +n);
        
    }
}