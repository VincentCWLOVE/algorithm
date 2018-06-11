/*
	Created by Vincent on 2018/6/11
*/


/*
	选择排序
*/


function InsertSort (arr) {
	console.time()

	for (let i = 1; i < arr.length; i++){
		let index = i - 1;
		let temp = arr[i]

		while(index >= 0 && arr[index] > temp){
			arr[index + 1] = arr[index]
			index--
		}

		arr[index + 1] = temp
	}

	console.timeEnd()

	console.log(arr)
}

InsertSort([5,3,1,2,4,7,6])