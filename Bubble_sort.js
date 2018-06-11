/*
	Created by Vincent on 2018/6/11
*/


/*
	冒泡排序
*/


function Bubble (arr) {
	
	console.time()

	for (let i =  0; i < arr.length; i++){


		for (let j = 0; j < arr.length - i + 1; j++){

			if(arr[j] < arr[j+1]){
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}

	console.timeEnd()

	console.log(arr)

}

Bubble([5,3,1,2,4,7,6])
