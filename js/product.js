const container = document.getElementsByClassName("productContainer")[0];
console.log("from js file", container)

const productObj = [
    {
        name: "silk",
        price: 6000,
        img: "img1",
        id:1
    },
    {
        name: "Los Angeles",
        price: 5700,
        img: "img2",
        id:2
    },
    {
        name: "Full Wig",
        price: 10000,
        img: "img3",
        id:3
    },
    {
        name: "Full Lac",
        price: 8000,
        img: "img4",
        id:4
    },
    {
        name: "Australia",
        price: 6500,
        img: "img5",
        id:5
    },
    {
        name: "Australian Full",
        price: 6200,
        img: "img6",
        id:6
    },
    {
        name: "Octagon",
        price: 6000,
        img: "img7",
        id:7
    },
    {
        name: "Black Rose",
        price: 3000,
        img: "img8",
        id:8
    },
    {
        name: "Mirage 3 part",
        price: 9600,
        img: "img9",
        id:9
    },
    {
        name: "Q6",
        price: 6000,
        img: "img10",
        id:10
    },
    {
        name: "Mirage 3 Part Full",
        price: 11000,
        img: "img11",
        id:11
    },
    {
        name: "Lady,s",
        price: 15000,
        img: "img12",
        id:12
    },
    {
        name: "Apollo F.L",
        price: 6000,
        img: "img13",
        id:13
    },
    {
        name: "Los Angeles",
        price: 5800,
        img: "img14",
        id:14
    },
    {
        name: "Ply PU",
        price: 7000,
        img: "img15",
        id:15
    },
    {
        name: "Mirage Australia",
        price: 9000,
        img: "img16",
        id:16
    },
    {
        name: "Paradise",
        price: 6600,
        img: "img17",
        id:17
    },
    {
        name: "Mono Lear",
        price: 3000,
        img: "img18",
        id:18
    },
    {
        name: "Frontal",
        price: 5000,
        img: "img19",
        id:19
    }
]

for(let i = 0;i<productObj.length;i++){
    container.innerHTML += `
        <div class="productCard" id="${productObj[i].id}">
                <div class="prodImg">
                    <img src="./images/byClient/Products/${productObj[i].img}.jpg" alt="">
                </div>

                <div class="prodDesc">
                    <h3>${productObj[i].name}</h2>

                    <p>Price: ₹ ${productObj[i].price}</p>

                    <button id="buyBtn">Order Now</button>
                </div>
        </div>
    `
}