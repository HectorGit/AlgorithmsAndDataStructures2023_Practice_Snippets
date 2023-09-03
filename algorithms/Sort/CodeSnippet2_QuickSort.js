// QuickSort(List, low, high)
//         if(low<high) 
// 	pivot=partition(List, high, low)
// 	QuickSort(List, how, pivot-1)
// 	QuickSort(List, pivot+1, high) 

// Partition(List,high,low)
//         pivot=arr[high]
//         i=(low-1)
//         for(j = low; j <= high-1; j++) 
// 	if(List[j] < pivot)
// 	        i++
// 	        swap(List[i], List[j]) 
//         swap(arr[i+1], List[j]) 
//         return I + 1 

// another version, in Javascript, for reference : 

const quickSort = (arr) => {
        if (arr.length <= 1) {
          return arr;
        }
      
        let pivot = arr[0];
        let leftArr = [];
        let rightArr = [];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < pivot) {
            leftArr.push(arr[i]);
          } else {
            rightArr.push(arr[i]);
          }
        }
      
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};