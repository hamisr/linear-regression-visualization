import * as tf from "@tensorflow/tfjs"

let formatInput = (input) =>{
  console.log("FORMATTING INPUT 1")
  console.log(input)
  console.log("potato")
  let valid = true
  let data = input.split("\n")
  let data2 = []
  data.forEach(line => {
    data2.push((line.split(",")))
  });
  let data3 = data2.map((line)=>
    line.map((number)=>
      Number(number)
    )
  )
  console.log("FINISHED DATA 3"+ data3)
  let tensorData = tf.tensor(data3)
  console.log("tensor data")
  tensorData.print()
  console.log("PRINTEd")
  console.log(tensorData.arraySync())
  console.log(tensorData.shape)
  if ((tensorData.shape[0]<2) || (tensorData.shape[1]<2)|| (tensorData.shape[0]>2)){
    valid = false
  }
  let arrayData = tensorData.arraySync()
  console.log([tensorData,arrayData,valid])
  return [tensorData,arrayData,valid]
}

export default formatInput