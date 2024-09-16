var bookName = document.getElementById('book-name');
var url = document.getElementById('book-url');
var tbody = document.getElementById('body')
var searchInput = document.getElementById('serch')
var updatedElement;
 var bookArray;
if(localStorage.getItem('booklist') != null ){
    bookArray =JSON.parse(localStorage.getItem('booklist'))
    display(bookArray)
}
else{
    bookArray=[];
}


function add(){
     if(bookName.value != '' && url != ''){
        var bookOb ={BookName :bookName.value,
            bookUrl: url.value
        }
        bookArray.push(bookOb)
        localStorage.setItem('booklist',JSON.stringify(bookArray))
        console.log(bookArray);
        display(bookArray)
    
     }
    showForm()
    clearForm()

}
function clearForm(){
    bookName.value ='';
    url.value='';
}

function display(aray){
    var body = '';

    for(i =0; i< aray.length; i++){
        body+=`<tbody id="body">
            <tr class="">
            <td>${i}</td>
            <td>${aray[i].BookName}</td>
            <td>${aray[i].bookUrl}</td>
            <td><a href="${aray[i].bookUrl} " target="_blank" class="btn btn-info" >viste<i class="fa-solid fa-eye-low-vision"></i></a></td>
            <td><button class="btn btn-warning" id="update" onclick="update(${i})">update<i class="fa-solid fa-pen-nib"></i></button></td>
            <td><button class="btn btn-danger" id="delete" onclick="Delete(${i})">delete<i class="fa-solid fa-trash"></i></button></td>
            </tr>
            </tbody>`
    }
    document.getElementById('body').innerHTML = body;
}
function Delete(index){
    console.log(index);
    bookArray.splice(index,1)
    localStorage.setItem('booklist',JSON.stringify(bookArray))
display(bookArray)

}
function search(){
console.log(searchInput.value);
var ruslet = [];
for(i =0; i<bookArray.length;i++)
{
if(bookArray[i].BookName.toLowerCase().includes(searchInput.value.toLowerCase()) == true || bookArray[i].bookUrl.toLowerCase().includes(searchInput.value.toLowerCase()) == true ){
        ruslet.push(bookArray[i])
    }
}
display(ruslet)

}
function update(index){
updatedElement=index
// console.log(index);
bookName.value=bookArray[index].BookName
url.value=bookArray[index].bookUrl
redisplauBtn()
showForm()

}
 
function redisplauBtn(){
    document.getElementById('sup').classList.replace('d-block','d-none')
    document.getElementById('update').classList.replace('d-none','d-block')

}
function updatedisplauBtn(){
    document.getElementById('sup').classList.replace('d-none','d-block')
    document.getElementById('update').classList.replace('d-block','d-none')

}
function finiyUpdate(){
    var newBookOb ={
        BookName:bookName.value,
        bookUrl:url.value
    }
    bookArray.splice(updatedElement,1,newBookOb)
    localStorage.setItem('booklist',JSON.stringify(bookArray))
    updatedisplauBtn()
    display(bookArray)
    clearForm()
}
function showForm(){
    document.getElementById('form').classList.replace('d-none','d-block')
}
function clos(){
    document.getElementById('form').classList.remove('d-block')
    document.getElementById('form').classList.add('d-none')

}


