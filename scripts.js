var app = new Vue({
    el: '#app',
    data: {
        items: [{
            name: "Black/White Mug",
            price: 10.99,
            stock: 5,
            ordered: 0,
            description: "Half black and half white modern mug design. Pretty Nifty",
            img: "images/mug1.jpg"
        },
        {
            name: "Couple's Mug",
            price: 18.99,
            stock: 3,
            ordered: 0,
            description: "Great for any couple. Show em that you love em! Great for proposals",
            img: "images/couplemug.jpg"
        }, 
        {
            name: "Pumpkin Mug",
            price: 12.99,
            stock: 1,
            ordered: 0,
            description: "Just in time for Halloween! It's our Pumpkin Mug! Just don't try carving it!",
            img: "images/pumpkinmug.jpg"
        }],
        total: 0
    },
    methods: {
        showImg() {
            $('#add').addClass("opacity100");
        },                    
        decrementStock(el) {
            if (el.stock > 0){
                el.stock--
            }                        
        },
        addToCart(el) {
            if (el.stock > 0){
                el.ordered++;
                this.total += el.price;              
            } 
        },
        removeFromCart(el) {
            if (el.ordered > 0) {
                el.ordered--;
                el.stock++;                
            }
            this.total -= el.price;
        },                               
        addHandler(el) {
            this.showImg();
            this.addToCart(el);
            this.decrementStock(el);
        }
    }                
})