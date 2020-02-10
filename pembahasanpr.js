var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];
var indexedit=-1
var indexdelete=-1
//show data
const Showdata=()=>{
    var selectfilter=arrCategory.map((val)=>{
        return `<option value='${val}'>${val}</option>`
    })
    console.log(selectfilter)
    var selectinmput=arrCategory.map((val)=>{
        if(val!=='All'){
            return `<option value='${val}'>${val}</option>`
        }else{
            return`<option hidden value='${val}'>select category</option>`
        }
    })

    var product=arrProduct.map((val,index)=>{
        if(index===indexdelete){
            return(
            `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td><button onclick="ondeleteyes()">yes</button></td>
                <td><button onclick="Canceldelete()">no</button></td>
            </tr>`
            )
        }else if(index===indexedit){
            return(
            `<tr>
                <td> ${val.id}</td>
                <td>${val.category}</td>
                <td><input type='text' value=${val.name} id='editnama'/> </td>
                <td><input type='number' value=${val.price} id='editprice'/></td>
                <td><input type='number' value=${val.stock} id='editstock'/></td>
                <td><button onclick="funcupdatedata()">simpan</button></td>
                <td><button onclick="Canceledit()">Cancel</button></td>
            </tr>`
            )
        }
        return(
            `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td><button onclick="funcdeletedata(${index})">delete</button></td>
                <td><button onclick="funceditdata(${index})">edit</button></td>
            </tr>`
        )
    })
    document.getElementById('render').innerHTML=product.join('')
    document.getElementById('categoryFilter').innerHTML=selectfilter.join("")
    document.getElementById('categoryInput').innerHTML=selectinmput.join("")
}

const funcdeletedata=(index)=>{
    indexdelete=index
    Showdata()
}
const Canceldelete=()=>{
    indexdelete=-1
    Showdata()
}
const Canceledit=()=>{
    indexedit=-1
    Showdata()
}
const ondeleteyes=()=>{
    arrProduct.splice(indexdelete,1)
    indexdelete=-1
    Showdata()
}

const funceditdata=(index)=>{
    indexedit=index
    Showdata()
}

const funcupdatedata=()=>{
    var editnama=document.getElementById('editnama').value
    var editharga=document.getElementById('editprice').value
    var editstock=document.getElementById('editstock').value
    arrProduct[indexedit].name=editnama
    arrProduct[indexedit].price=editharga
    arrProduct[indexedit].stock=editstock
    indexedit=-1
    Showdata()
    // event.preventDefault()
}
var filternameinput=''
var filterpriceleft=0
var filterpriceright=0
var filtercategory=''

const filterall=()=>{
    var filterprod=arrProduct.filter(val=>{
        var filtername
        console.log(filternameinput)
        if(filternameinput){
            filtername=val.name.toLowerCase().includes(filternameinput.toLowerCase())
        }else{
            filtername=true
        }
        var price
        if(filterpriceleft&&filterpriceright){
            price=val.price>=filterpriceleft&&val.price<=filterpriceright
        }else{
            price=true
        }
        var category
        if(filtercategory!='All'&&filtercategory!=''){
            category=val.category==filtercategory
        }else{
            category=true
        }
        return category&&price&&filtername
    })
    document.getElementById('render').innerHTML=Showfilter(filterprod).join('')
    
}



const funFilterName=()=>{
    var keyword=document.getElementById('keyword').value
    filternameinput=keyword
    filterall()


    
    // var min=parseInt(document.getElementById('min').value)
    // var max=parseInt(document.getElementById('max').value)
    // var filtername=[]
    // if(min==''||max==''){
    //     for(var i=0;i<arrProduct.length;i++){
    //         if(arrProduct[i].name.toLowerCase().includes(keyword.toLowerCase())){
    //             filtername.push(arrProduct[i])
    //         }
    //     }
    // }else{
    //     for(var i=0;i<arrProduct.length;i++){
    //         if(arrProduct[i].name.toLowerCase().includes(keyword.toLowerCase())){
    //             filtername.push(arrProduct[i])
    //         }
    //     }
    // }
    // document.getElementById('render').innerHTML=Showfilter(filtername).join('')
}

const funFilterPrice=()=>{
    // console.log('tes')
    var min=parseInt(document.getElementById('min').value)
    var max=parseInt(document.getElementById('max').value)
    filterpriceleft=min
    filterpriceright=max
    filterall()

    // console.log(typeof(min))
    // if(min==''||max==''){
    //     document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
    // }else{
    //     var databaru=arrProduct.filter((val)=>val.price>=min&&val.price<=max)
    //     document.getElementById('render').innerHTML=Showfilter(databaru).join('')
    // }
}
const funFilterCategory=()=>{
    var select=document.getElementById('categoryFilter').value
    filtercategory=select
    filterall()
    // console.log(select)
    // if(select=='All'){
    //     document.getElementById('render').innerHTML=Showfilter(arrProduct).join('')
    // }else{
    //     var datafilter=arrProduct.filter((val)=>val.category==select)
    //     document.getElementById('render').innerHTML=Showfilter(datafilter).join('')
    // }
}
function Showfilter(filterarr){
    return filterarr.map((val,index)=>{
        return(
            `<tr>
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td><button onclick="funcdeletedata(${index})">delete</button></td>
                <td><button onclick="funceditdata(${index})">edit</button></td>
            </tr>`
        )
     })
 }
Showdata()
