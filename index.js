const express =require('express')
const app=express()
const port=process.env.port||8080;
const cors=require('cors')

app.listen(port,()=>{
    console.log("Server running at 8080");
})

data=[
    {
        "details": "2020 - 14,000 km",
        "img": "https://apollo.olx.in:443/v1/files/3hr5ljrq89dw-IN/image;s=272x0",
        "price": "₹ 55,000",
        "subtitle": "",
        "title": "Tvs scooty pep plus ( model- 2020 ) ( 14000 km )"
    },
    {
        "details": "2023 - 0 km",
        "img": "https://apollo.olx.in:443/v1/files/m4l025so9bql-IN/image;s=272x0",
        "price": "₹ 9,000",
        "subtitle": "",
        "title": "Activa Down payment 9000/Spot delivery."
    },
    {
        "details": "2019 - 38,000 km",
        "img": "https://apollo.olx.in:443/v1/files/kxnvpmxl3n7f-IN/image;s=272x0",
        "price": "₹ 52,000",
        "subtitle": "",
        "title": "Tvs Ntorq 125 2019 model Grey colour in good condition"
    },
    {
        "details": "2016 - 39,026 km",
        "img": "https://apollo.olx.in:443/v1/files/7zxm3bxozm4b3-IN/image;s=272x0",
        "price": "₹ 35,000",
        "subtitle": "",
        "title": "Changing  new"
    },
    {
        "details": "2018 - 34,500 km",
        "img": "https://apollo.olx.in:443/v1/files/f4l04erjs8wy1-IN/image;s=272x0",
        "price": "₹ 44,000",
        "subtitle": "",
        "title": "Sale my Activa 5g"
    },
    {
        "details": "2019 - 18,329 km",
        "img": "https://apollo.olx.in:443/v1/files/9329bs5vw9bh-IN/image;s=272x0",
        "price": "₹ 68,500",
        "subtitle": "",
        "title": "Honda Dio DX single owner"
    },
    {
        "details": "2019 - 8,524 km",
        "img": "https://apollo.olx.in:443/v1/files/u4ktkoulj59d3-IN/image;s=272x0",
        "price": "₹ 18,000",
        "subtitle": "",
        "title": "Urgent.                Ok.             Selling"
    },
    {
        "details": "2016 - 24,500 km",
        "img": "https://apollo.olx.in:443/v1/files/cvyh3p6evflr1-IN/image;s=272x0",
        "price": "₹ 35,000",
        "subtitle": "",
        "title": "Tvs jupiter"
    },
    {
        "details": "2023 - 3,500 km",
        "img": "https://apollo.olx.in:443/v1/files/aigovvp7s92l2-IN/image;s=272x0",
        "price": "₹ 34,400",
        "subtitle": "",
        "title": "Scooter (p) Ltd"
    },
    {
        "details": "2019 - 15,500 km",
        "img": "https://apollo.olx.in:443/v1/files/xerg84xos7mq1-IN/image;s=272x0",
        "price": "₹ 25,000",
        "subtitle": "",
        "title": "Best condition bike"
    },
    {
        "details": "2019 - 11,500 km",
        "img": "https://apollo.olx.in:443/v1/files/jyt849zc0sjj3-IN/image;s=272x0",
        "price": "₹ 25,000",
        "subtitle": "",
        "title": "Very.               Urgent sale"
    },
    {
        "details": "2012 - 85,200 km",
        "img": "https://apollo.olx.in:443/v1/files/g2r3oarloqjj-IN/image;s=272x0",
        "price": "₹ 6,100",
        "subtitle": "",
        "title": "Scrap bike and scooter buyer"
    },
    {
        "details": "2013 - 32,000 km",
        "img": "https://apollo.olx.in:443/v1/files/mdw007gy9kh91-IN/image;s=272x0",
        "price": "₹ 16,000",
        "subtitle": "",
        "title": "duro dz125 Selling"
    },
    {
        "details": "2010 - 1,000 km",
        "img": "https://apollo.olx.in:443/v1/files/b49q0ytrhwo01-IN/image;s=272x0",
        "price": "₹ 14,000",
        "subtitle": "",
        "title": "Active I 10"
    },
    {
        "details": "2021 - 11,700 km",
        "img": "https://apollo.olx.in:443/v1/files/p9b8nd0bz9ef3-IN/image;s=272x0",
        "price": "₹ 90,000",
        "subtitle": "",
        "title": "Good condition"
    },
    {
        "details": "2021 - 9,865 km",
        "img": "https://apollo.olx.in:443/v1/files/tletf05z3mma1-IN/image;s=272x0",
        "price": "₹ 30,000",
        "subtitle": "",
        "title": "Very                                   nice"
    },
    {
        "details": "2022 - 32,500 km",
        "img": "https://apollo.olx.in:443/v1/files/4dcvts7lwwud1-IN/image;s=272x0",
        "price": "₹ 1,05,000",
        "subtitle": "",
        "title": "OLA S1 PRO"
    },
    {
        "details": "2020 - 19,000 km",
        "img": "https://apollo.olx.in:443/v1/files/49y7vyztmtsu-IN/image;s=272x0",
        "price": "₹ 68,000",
        "subtitle": "",
        "title": "HONDA ACTIVA 6G DLX"
    },
    {
        "details": "2020 - 20,000 km",
        "img": "https://apollo.olx.in:443/v1/files/p4s67bsrn4xs3-IN/image;s=272x0",
        "price": "₹ 40,000",
        "subtitle": "",
        "title": "Urgent sale"
    },
    {
        "details": "2023 - 10,000 km",
        "img": "https://apollo.olx.in:443/v1/files/zu1dlbrrs4jr3-IN/image;s=272x0",
        "price": "₹ 30,000",
        "subtitle": "",
        "title": "65 km ik  charge mai"
    }
];

// middleware
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/api/olx',(req,res)=>{
    res.send(data);
})