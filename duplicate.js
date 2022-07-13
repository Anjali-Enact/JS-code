const arr=[22,33,44,55,66,7,89,22,33,44];
let size= arr.length;
for(let i= 0;i<size;i++)
{
    for(let j=i+1;j<size;j++)
    {
        if(arr[i] == arr[j])
        {
            for(let k=j;k<size-1;k++)
            {
                arr[k]=arr[k+1];
            }
            size--;
            j--;
        }
    }
    console.log(arr[i]);
   
}
console.log(size);
