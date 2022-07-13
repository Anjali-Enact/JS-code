let pos=3;
let element=35;
let arr=[23,34,56,78,89,90]

for(let i=arr.length;i>=pos;i--)
{
    arr[i+1] = arr[i];
    
}


  for(i=0;i<arr.length;i++)
  {
    console.log(arr[i]);
  }
