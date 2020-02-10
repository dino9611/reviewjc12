// var aldo={
//     harun:()=>{
//         return [
//             {
//                 atian:'berhasil'
//             }
//         ]
//     }
// }

// var user='aldo'
// var umur=13
// var harun=()=>{
//     return [1]
// }
// var obj={
//     user,
//     umur,
//     adriani:harun
// }
// console.log(obj.adriani()[0])

var arr=['aldo','dian','haura','putri','sekar']

var tes=arr[1].includes('odi')
console.log(tes)

// var arrkeluarga=arr.map((val)=>{
//     return `uzumaki ${val}`
// })

// var arrkeluarga=[]
// for(var i=0;i<arr.length;i++){
//     arrkeluarga.push(`uzumaki ${arr[i]}`)
// }

const mapalala=(arraytes,cb)=>{
    var output=[]
    for(var i=0;i<arraytes.length;i++){
        output.push(cb(arraytes[i],i))
    }
    return output
}

// console.log(mapalala(arr,(val,index)=>{
//     return `${index+1}. joko ${val}`
// }))


// console.log(aldo.harun()[0]['atian'])//berhasil