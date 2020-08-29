new Vue({
    el:'.container',
    data:{
        total:0,
        products:[
            {title:"Nike Air Jordan Footwear", id:"product1", price: 2500,thumb:"/img/img.png", info:"Nike Air Jordan Footwear basketball sneakers."},
            {title:"White Bread 1500g", id:"product2", price: 165,thumb:"/img/bread.jpg", info:"This is the sweetest white bread availaable"},
            {title:"Pearl Pishori rice 5kg", id:"product3", price: 600,thumb:"/img/pishori.jpeg", info:"Guaranteed to fill your house with the sweetest aroma"},
            {title:"colgate white", id:"product4", price: 70,thumb:"/img/colgate.jpg",info:"Strengthens teeth"},
            {title:"Dola 1kg",id:"product5", price: 90,thumb:"/img/dola.png",info:"Cooks the sweetest ugali"},
            {title:"Brookside Milk 1L", id:"product6", price: 310,thumb:"/img/milk.jpg",info:""},
            {title:"Mumias sugar 1kg", id:"product7", price: 115,thumb:"/img/sugar.jpg",info:"Experience this sweetness"},
            {title:"Kensalt 1kg", id:"product8", price: 49,thumb:"/img/salt.jpg",info:"Sweetens your food"},
            {title:"Harpic 200ml", id:"product9", price: 90,thumb:"/img/harpic.jpg",info:"Cleanses well"},
            {title:"Dasani bottled water 1L", id:"product10", price: 50,thumb:"/img/water.jpg",info:"Resfreshing!"}
        ],
        cart:[],
      
    },
    methods:{ 
        addToCart: function(product) {
        this.total  += product.price;
        var found = false;
        for (var i=0;i < this.cart.length; i++){
            if (this.cart[i].id===product.id){
                this.cart[i].qty++;
                found = true;
            }
        }
        if(!found){
            this.cart.push({
                id:product.id,
                title:product.title,
                qty:1,
                price:product.price
            });
        } 
          
       },
       inc: function(item){
        item.qty++;
        this.total += item.price;

    },
    dec: function(item){
        item.qty--;
        this.total -= item.price;
        if (item.qty <= 0 ) {
            var i = this.cart.indexOf(item);
            this.cart.splice(i, 1);
        }
    }, 
    onSubmit: function () {
        console.log = "Bought";
    }
        
},
       
    filters: {
        currency: function(price) {
 return "Ksh" + (price.toFixed(2));
}
}
})