let pos=3;
let arr=[23,34,56,78,89,90];
for(let i=pos;i<arr.length-1;i++)
{
   arr[i]=arr[i+1];
}
for(i=0;i<arr.length-1;i++)
{
    console.log(arr[i]);
}