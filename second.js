const arr=[11,2,34,45,67]
let largestNumber = arr[0];
let secondLargestNum = arr[0];
for (let i=0; i<arr.length;i++)
{
    if(arr[i] > largestNumber)
    {
        secondLargestNum=largestNumber;
        largestNumber = arr[i];
    }
    else if (arr[i] > secondLargestNum)
    {
        secondLargestNum = arr[i];
    }
    
}
console.log(secondLargestNum);