//Bài 9: Viết class product theo thiết kế
class Product{
    constructor(id, name, categoryId, saleDate, quality, isDelete){
        this.id= id;
        this.name= name;
        this.categoryId= categoryId;
        this.saleDate= saleDate;
        this.quality= quality;
        this.isDelete= isDelete;
    }
}

//Bài 10: Viết function tạo listProduct chứa 10 đối đượng product
const listProduct= [];
function setListProduct(){
    const product1= new Product(1, "CPU", 1, new Date(2022, 5, 1), 10, false);
    listProduct[listProduct.length]= product1;
    const product2= new Product(2, "GPU", 1, new Date(2022, 6, 14), 9, true);
    listProduct[listProduct.length]= product2;
    const product3= new Product(3, "RAM", 1, new Date(2022, 6, 17), 2, true);
    listProduct[listProduct.length]= product3;
    const product4= new Product(4, "ROM", 1, new Date(2022, 6, 20), 0, false);
    listProduct[listProduct.length]= product4;
    const product5= new Product(5, "Screen", 1, new Date(2022, 6, 25), 1, false);
    listProduct[listProduct.length]= product5;
    const product6= new Product(6, "Mouse", 1, new Date(2022, 7, 16), 0, true);
    listProduct[listProduct.length]= product6;
    const product7= new Product(7, "Keyboard", 1, new Date(2022, 8, 16), 10, false);
    listProduct[listProduct.length]= product7;
    const product8= new Product(8, "Card", 1, new Date(2022, 6, 11), 4, false);
    listProduct[listProduct.length]= product8;
    const product9= new Product(9, "CPU9", 1, new Date(2022, 6, 10), 6, false);
    listProduct[listProduct.length]= product9;
    const product10= new Product(10, "CPU10", 1, new Date(2022, 9, 16), 10, false);
    listProduct[listProduct.length]= product10;
}
setListProduct();
//"Bài 11: Viết function trả về tên của product theo id: fiterProductById(listProduct, idProduct).Viết theo 2 cách : dùng ES6 và dùng vòng for
//ES6:
function filterProductByIdES6(listProduct, idProduct){
    let Result= listProduct.find(Element=> Element.id == idProduct);
    return Result;
}
//for:
function filterProductByFor(listProduct, idProduct){
    let Result;
    listProduct.forEach(element => {
        if(element.id== idProduct){
            Result= element;
        }
    });
    return Result;
}

//"Bài 12: Viết function trả về array product có quality > 0 và chưa bị xóa: fiterProductByQuality(listProduct).Viết theo 2 cách : dùng ES6 và  dùng vòng for"
//ES6
function fiterProductByQualityES6(listProduct){
    const listResult= listProduct.filter(element=> element.quality>0 && element.isDelete==false);
    return listResult;
}

//For
function fiterProductByQualityByFor(listProduct){
    const listResult= [];
    listProduct.forEach(element => {
        if(element.quality>0&& element.isDelete==false){
            listResult[listResult.length]= element;
        }
    });
    return listResult;
}

//"Bài 13: Viết function trả về array tên product có saleDate > ngày hiện tại và chưa bị xóa: fiterProductBySaleDate(listProduct).Viết theo 2 cách : dùng ES6 và  dùng vòng for"
//ES6:
function fiterProductBySaleDateEs6(listProduct){
    var toDay= new Date();
    const listResult= listProduct.filter(element=> element.saleDate.getTime()>toDay.getTime()&& element.isDelete==false);
    const mapResult = listProduct.map(element=>{
        return element.name;
    })
    return mapResult;
}
//For:
function fiterProductBySaleDateEs6(listProduct){
    var toDay= new Date();
    const listResult=[];
    listProduct.forEach(element => {
        if(element.saleDate.getTime()>toDay.getTime()&&element.isDelete==false){
            listResult[listResult.length]= element;
        }
    });
    return listResult;
}

//"Bài 14: Viết function trả về tổng số product ( tổng qulity) chưa bị xóa: totalProduct(listProduct).Viết theo 2 cách : dùng reducer của stream và không dùng reducer"
//Reducer
function totalProductByReduce(listProduct){
    return listProduct.reduce(getTotal);
}
function getTotal(total, value){
    if(value.isDelete==false){
        return total + value.quality;
    }
    else{
        return total;
    }
}
//Not Reduce
function totalProduct(listProduct){
    var total= 0;
    listProduct.forEach(element=>{
        if(element.isDelete== false){
            total+= element.quality;
        }
    });
    return total;
}

//"Bài 15: Viết function trả về true nếu có product thuộc category: isHaveProductInCategory(listProduct, categoryId).Viết theo 2 cách : dùng ES6 và  dùng vòng for"
//ES6
function isHaveProductInCategoryByES6(listProduct, categoryId){
    const product= listProduct.find(element=> element.categoryId== categoryId);
    if(product==null){
        return false;
    }
    else{
        return true;
    }
}
//for
function isHaveProductInCategory(listProduct, categoryId){
    var result= false;
    listProduct.forEach(element => {
        if(element.categoryId== categoryId){
            result= true;
        }
    });
    return result
}

//"Bài 16: Viết function trả về array chứa array string (id, tên) product có saleDate > ngày hiện tại và quality > 0: fiterProductBySaleDate(listProduct).Viết theo 2 cách : dùng ES6 và  dùng vòng for"
//ES6
function fiterProductBySaleDateByES6(listProduct){
    var toDay= new Date();
    const list= listProduct.filter(element=> element.saleDate.getTime()>toDay.getTime()&& element.quality>0);
    const mapResult= list.map(element=>{
        return {id : element.id, name : element.name};
    });
}
//For
function fiterProductBySaleDate(listProduct){
    var arrayResult = [];
    var toDay= new Date();
    listProduct.forEach(element => {
        if(element.saleDate.getTime()>toDay.getTime()&& element.quality>0){
            arrayResult[arrayResult.length]= {id: element.id, name: element.name};
        }
    });
    return arrayResult;
}