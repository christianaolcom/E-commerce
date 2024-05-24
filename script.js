const items = [];
const add = () => {
    if (arr.value == ''){
        disp.innerHTML = `<p class="alert alert-info text-dark fw-bold mt-1 text-center">Fill in the empty space</p>`
    
    }else {
        console.log('fast');
        items.push(arr.value)
        console.log(items);
        arr.value = '';
       dispItem()
    }
}   

const deleteFirst = () => {
    if(items.length > 0) {
        items.shift()
        dispItem()
        console.log(items);
    }else  {
        disp.innerHTML= `<p class="alert alert-warning fw-bold mt-2 text-center">Add an items to delete</p>`
    }
}

const editItem = () => {
    alert('Edit')
}

const deleteItem = (index) => {
    items.splice(index,1)
    dispItem()

}

const dispItem =()=>{
    disp.innerHTML = ""
    for(i =0; i< items.length; i++){
        disp.innerHTML += `<p class="border p-2 rounded-pill my-3 col-6 mx-auto text-center">${i+1}. ${items[i]}</p>`
    }
}

const addFirst = () => {
   let jim = prompt(arr.value)
        items.unshift(jim)
        dispItem()
}

const delLast = () => {
    if(items.length>0) {
        items.pop()
        dispItem()
        console.log(items);
    }
}

const delAll = (index) => {
    if (items.length > 0){
        alert("Are you sure")
        items.splice (index)
        dispItem()
    }
}


const delAny = () => {
    let yes = prompt(arr.value)
         items.splice(yes -1,1)
         dispItem()
 }


const editAny = () => {
    var userInput = Number(prompt("Enter a number to edit"));
    var userEdit = prompt("Enter new item");
    items[userInput - 1] = userEdit
    dispItem()
}


// `<table>
//         <tr>
//             <td class="btn btn-info mx-auto text-center">S/N</td>
//             <td class="btn btn-info mx-auto text-center">Items</td>
//             <td>${i+1}.${items[i]}</td>
//         </tr>
//         </table>`