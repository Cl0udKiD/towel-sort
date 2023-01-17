module.exports = function towelSort (matrix) {
  var arr1=[];
        for (let i in matrix){
            if (i%2==1){arr1.push(matrix[i].reverse())}else{arr1.push(matrix[i])}
        }
        var arr2=[]
        for (i in arr1){
          for (j in arr1[i]){arr2.push(arr1[i][j])}
        }
        return arr2
  }
