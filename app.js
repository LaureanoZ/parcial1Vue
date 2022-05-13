const app = new Vue({
    el: '#app',
    data: {
        productos: 
            [
                {
                    id: 1,
                    titulo: "Tarjeta Akatsuki",
                    precio: 500,
                    src: "img/akatsuki.png",
                },
                {
                    id: 2,
                    titulo: "Tarjeta Homero",
                    precio: 300,
                    src: "img/homero.png",
                },
                {
                    id: 3,
                    titulo: "Tarjeta MC Lovin",
                    precio: 800,
                    src: "img/mclovin.png",
                },
                {
                    id: 4,
                    titulo: "Tarjeta Wey Ya",
                    precio: 200,
                    src: "img/weyya.png",
                },
                {
                    id: 5,
                    titulo: "Tarjeta Leo Dicaprio",
                    precio: 700,
                    src: "img/dicaprio.png",
                },
                {
                    id: 6,
                    titulo: "Tarjeta Wall Street",
                    precio: 700,
                    src: "img/wallstreet.png",
                },
                {
                    id: 7,
                    titulo: "Tarjeta Juego del Calamar",
                    precio: 100,
                    src: "img/456.png",
                },
                {
                    id: 8,
                    titulo: "Tarjeta Bob Esponja",
                    precio: 1200,
                    src: "img/bobesponja.png",
                },
                {
                    id: 9,
                    titulo: "Tarjeta Cartman",
                    precio: 500,
                    src: "img/cartman.png",
                },
                {
                    id: 10,
                    titulo: "Tarjeta Cheems",
                    precio: 400,
                    src: "img/cheems.png",
                },
                {
                    id: 11,
                    titulo: "Tarjeta Dead Pool",
                    precio: 1000,
                    src: "img/deadpool.png",
                },
                {
                    id: 12,
                    titulo: "Tarjeta Rick y Morty",
                    precio: 3000,
                    src: "img/rickymorty.png",
                },
            ],
            precioTotal: 0,
            productosTotales: 0,
            gracias: "",
            filtro:"",
            
    },
    computed: {
        busqueda: function(){
            let copiaProductos = this.productos
            if(this.filtro == ""){
                return this.productos
            }else{
                copiaProductos = this.productos.filter(producto =>  producto.titulo.toLowerCase().includes(this.filtro.toLowerCase()));
                return copiaProductos
            }            
        }
        
    },
    methods:{
        agregar: function(indice){
            let productoPrecio = this.productos[indice].precio;
            this.precioTotal += productoPrecio;
            this.productosTotales++;          
        },
        cancelar: function(){
            this.precioTotal = 0; 
            this.productosTotales = 0;
            this.gracias ="";       
        },
        comprar: function(){
            if(this.precioTotal != 0){
                this.precioTotal = 0;
                this.productosTotales = 0;
                this.gracias = "¡Gracias por su compra! 😁" ;
            }else{
                this.gracias = "Debes seleccionar un producto para comprar 😫"; 
            }
        
        },
        close: function(){
            this.gracias = "";         
        },
    }
    
})