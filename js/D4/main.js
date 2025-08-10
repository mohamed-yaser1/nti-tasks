let inputName = document.getElementById("name");
let inputDesc = document.getElementById("desc");
let submitButton = document.querySelector('button[type="submit"]')
let tbody = document.querySelector('tbody');
let inputSearch = document.getElementsByClassName("search");





let products = [];

if(localStorage.getItem('products'))
    {
        products = JSON.parse(localStorage.getItem('products'));
        displayProducts();
        
    }
    
    inputSearch[0].oninput = function(){
        if(inputSearch[0].value)
        {
            console.log(inputSearch[0].value)
            products = products.filter(el =>el.name.includes(inputSearch[0].value) || el.catgory.includes(inputSearch[0].value) ? el : null );
            displayProducts()
        }
        else {
            products = JSON.parse(localStorage.getItem('products'));
            displayProducts();
        }
    }

submitButton.onclick = function(e){
    e.preventDefault()
    addProductToLocalStorage();
    inputName.value = "";
    inputDesc.value = "";

}

const getProductData = () => {
    let product = {
        id:Date.now(),
        name:"",
        desc:"",
        catgory:""
    }
   product["name"] = inputName.value;
   product["desc"] = inputDesc.value;
   let selectedRadio = document.querySelector('input[name="catgory"]:checked');
   if(selectedRadio)
    product["catgory"] = selectedRadio.value

  return product;
}

const addProductToLocalStorage = () => {
    const product = getProductData();
    products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
    displayProducts();
    
}

function displayProducts() {
    let tableData = "";
    products.forEach(e => {
        tableData+=`
        <tr>
        <td>${e.name}</td>
            <td>${e.desc}</td>
            <td>${e.catgory}</td>
            <td><span class="del" onclick="handleDelete(${e.id})">del </span><span class="edi" onclick="handleEdit(${e.id})">edi</span></td>
        </tr>
        `
    });
    tbody.innerHTML = tableData;

}

function handleDelete(id){
    products = products.filter(el => el.id!==id);
    localStorage.setItem('products',JSON.stringify(products));
    displayProducts();
}

function handleEdit(id){
   const {name,desc,catgory} =  products.find(el => el.id==id)
   inputName.value = name;
   inputDesc.value = desc;
    const radioToSelect = document.querySelector(`input[name="catgory"][value="${catgory}"]`);
    if (radioToSelect) {
        radioToSelect.checked = true;
    }

        submitButton.textContent = "update"
    
        submitButton.onclick = function(){
        products = products.map(el => el.id !== id ? el : {...el,name:inputName.value,desc:inputDesc.value,catgory:document.querySelector('input[name="catgory"]:checked').value})
        localStorage.setItem('products',JSON.stringify(products));
        displayProducts();
        inputName.value = "";
        inputDesc.value = "";
        submitButton.textContent = "Add product"
    }
}







