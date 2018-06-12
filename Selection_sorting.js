/*
	Created by Vincent on 2018/6/11
*/


/*
	选择排序
*/


// 交换两个数的位置
function Swap(arr,a,b){

	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp

}

function Sort(arr){
	console.time()
	for (let i = 0; i < arr.length; i++){

		let minIndex = i

		for (let j = i + 1; j < arr.length; j++){

			if( arr[minIndex] > arr[j] ){
				minIndex = j
			}

		}

		Swap(arr,minIndex,i)
	}
	console.timeEnd()
	console.log(arr)
}

Sort([5,3,1,2,4,7,6])







