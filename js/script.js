
// Test database
const dataBase =
[
    {
        id: "1",
        title: "San pham test",
        product_category_id: "PC",
        description: "Dinh cao xh",
        price: "2000$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-test"
    },
    {
        id: "2",
        title: "San pham mia may",
        product_category_id: "PC gaming",
        description: "Dinh cao xh",
        price: "2500$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-mia-may"
    },
    {
        id: "3",
        title: "San pham 3",
        product_category_id: "PC",
        description: "Dinh cao xh",
        price: "2000$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-test"
    },
    {
        id: "4",
        title: "San pham 4",
        product_category_id: "PC gaming",
        description: "Dinh cao xh",
        price: "2500$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-mia-may"
    },
    {
        id: "5",
        title: "San pham 5",
        product_category_id: "PC",
        description: "Dinh cao xh",
        price: "2000$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-test"
    },
    {
        id: "6",
        title: "San pham 6",
        product_category_id: "PC gaming",
        description: "Dinh cao xh",
        price: "2500$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-mia-may"
    },
    {
        id: "7",
        title: "San pham 7",
        product_category_id: "PC",
        description: "Dinh cao xh",
        price: "2000$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-test"
    },
    {
        id: "8",
        title: "San pham 8",
        product_category_id: "PC gaming",
        description: "Dinh cao xh",
        price: "2500$",
        discountPercentage: "10%",
        stock: 32,
        thumbnail: "String",
        featured: "Khong",
        position: 20,
        slug: "san-pham-mia-may"
    }
]

localStorage.setItem("productTest", JSON.stringify(dataBase));

const JsonProduct = localStorage.getItem("productTest");
const ProductList = JSON.parse(JsonProduct);

// End test database


// Show Bar On Mobile
const barNav = document.querySelector('.header-top i.bar');
const navigation = document.querySelector('.navigation');
barNav.addEventListener('click', (e) => {
    navigation.classList.add('show-mb');
});

const closeNav = document.querySelector('.navigation-bar-on-mobile i.close');
const main = document.querySelector('.main');


closeNav.addEventListener('click', () => {
    navigation.classList.remove('show-mb');
})
// End Show Bar On Mobile




// Pagination
const listProductItems = document.querySelectorAll('.content-product-item');

let currentPage = 1;
let limitPage = 3;
let skipPage = (currentPage - 1) * limitPage;
const totalPage = Math.ceil(1.0 * ProductList.length / limitPage);


const pagination = document.querySelector('.content-pagination');

const DrawPagination = () => {
    let elementUL = ``;
    elementUL += `<li page="first"><<</li>`;
    for(let i = 1; i <= totalPage; i++){
        elementUL += `<li page=${i}>${i}</li>`;
    }
    elementUL += `<li page="last">>>></li>`;
    
    pagination.innerHTML = `
    <ul>
        ${elementUL}
    </ul>`;
}
DrawPagination();


const PagePagination = pagination.querySelectorAll('ul li');
if(PagePagination.length > 0){
    PagePagination.forEach(page => {

        // Default la trang 1
        if(page.getAttribute('page') == "1"){
            page.classList.add('active');
        }
        // End Default la trang 1

        page.addEventListener('click', () => {


            //Xóa class active
            PagePagination.forEach(itemPage => itemPage.classList.remove('active'));
            //End xóa class active


            if(page.getAttribute('page').match('[0-9]{1}')){
                page.classList.add('active');
                currentPage = parseInt(page.getAttribute('page'));
                skipPage = (currentPage - 1) * limitPage;
                DrawProductItem();
            } else if (page.getAttribute('page') == "first"){
                const pageFirst = pagination.querySelector(`ul li[page="1"]`);
                pageFirst.classList.add('active');
                currentPage = 1;
                skipPage = (currentPage - 1) * limitPage;
                DrawProductItem();
            } else if (page.getAttribute('page') == "last"){
                const pageLast = pagination.querySelector(`ul li[page="${PagePagination.length - 2}"]`);
                pageLast.classList.add('active');
                currentPage = PagePagination.length - 2;
                skipPage = (currentPage - 1) * limitPage;
                DrawProductItem();
            }
        })
    });
}
// End Pagination

// Draw Product
const DrawProductItem = () => {
    const listProduct = document.querySelector('.content-product-list');
    if(listProduct){
        let ItemProduct = ``
        for(let i = skipPage; i <= limitPage + skipPage - 1; i++){
            if(ProductList[i]){
                ItemProduct += `
                <div class="col-6 col-md-4 col-lg-3" style="padding: 5px;">
                    <div class="content-product-item">
                        Product ${ProductList[i].title}
                    </div>
                </div>
                `
            }
        }
        listProduct.innerHTML = ItemProduct;
    }
}

DrawProductItem();
//End Draw Product

