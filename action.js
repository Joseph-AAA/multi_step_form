const products = [
                    {
                    id:1,
                    name:"Laptop",
                    price:1200,
                    stock:5
                    },
                    {
                    id:2,
                    name:"Mouse",
                    price:50,
                    stock:20
                    },{
                    id:3,
                    name:"Keyboard",
                    price:100,
                    stock:0
                    }
                ];

console.log ("**************(1)Display Product Names ************") 
console.log ("**************By for of Loop ************")
  const getProductName = (products)=>{
      for(const prop of products){
        console.log(prop.name);
      }
  } 

 getProductName(products)

   const getProductNames = (products)=>{
     return products.map((product)=>product.name)
   }
   console.log ("**************By Map Method************")
   console.log(getProductNames(products));


 
console.log  ("  ");
 console.log ("**************(2)Find Available Products************")  
 console.log ("**************By forEach Loop Method************")

  const getAvailableProduct = (products)=>{
        products.forEach(product => {
            if(product.stock>0){
                console.log(product.name)
            }
        });
   }
    getAvailableProduct(products);
   


    console.log ("**************By filter Method************")
   const getAvailableProducts = (products)=>{
      return products.filter((product)=>product.stock>0).map((item)=>item.name)
   }
   console.log(getAvailableProducts(products));



 console.log  ("  ");
 console.log ("**************(3)Find Specific Product************")  
 console.log ("**************By forloop Method************")

 
   const findProducts = (products,id)=>{
       for(let i=0; i<products.length ; i++){
            if(products[i].id == id){
                console.log({name : products[i].name})
            }
       }
   }
    findProducts(products,2)





  console.log ("**************By find Method************")

   const findProduct = (products,id)=>{
        const product = products.find((product)=>product.id==id);
        return {name : product.name}
   }
   console.log(findProduct(products,2))


 console.log  ("  ");
 console.log ("**************(4)Calculate Inventory Value************")  
 console.log ("**************By for of loop************")

 const calculateInventorys = (products)=>{
        
       let total = 0;
       for(const {price,stock} of products){
            total += (price*stock);
       }
       console.log("Total : " + total);

   }
   calculateInventorys(products)



   console.log ("**************By Reduce Method************")

      const calculateInventory = (products)=>{
        
        const totalPrice = products.reduce((total,{price,stock})=>{
                return total + (price*stock)
        }, 0 )
        return `Total : ${totalPrice}`
   }
   console.log(calculateInventory(products))

 console.log  ("  ");
 console.log ("**************(5)Create Product Report************")  
 console.log ("**************By for each loop************")
 
   const createReports = (products)=>{
     products.forEach((product)=>{
        console.log(`${product.name} - ${product.price}`)
     })
  }
  createReports(products)










  console.log ("**************By map method************")
 
  const createReport = (product)=>{
     return product.map(({name,price})=>{
              return  `${name} - ${price}`
     })
  }
  console.log(createReport(products))
