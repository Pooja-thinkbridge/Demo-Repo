var order = [
    {
    "employee": "Nicole",
    "total": 13,
    "lineItems": {
    "elements": [
    {
    "name": "Burger",
    "price": 8
    },
    {
    "name": "Lamb",
    "price": 6.50
    }
    ]
    }
    },
    {
    "employee": "Dan",
    "total": 11,
    "lineItems": {
    "elements": [
    {
    "name": "Lamb",
    "price": 4.50
    },
    {
    "name": "Meatballs",
    "price": 6.50
    }
    ]
    }
    }
    ];
    

    newarr1 =[];
order.forEach((word) => {

for(i=0;i<(order[1].lineItems.elements.length);i++){
  newarr1.push(word.lineItems.elements[i]);}
    
});
const res = newarr1.filter(item => item.price > 6);

console.log(res);


newarr =[];
order.forEach((word) => {

for(i=0;i<(order[1].lineItems.elements.length);i++){
  newarr.push(word.lineItems.elements[i]);}
    
});
const found = newarr.find(element => element.name === 'Burger');

console.log(found);

newarr1 =[];
order.forEach((word,index) => {
word.lineItems.elements.forEach((item,i) => {

  const r=item.filter(item => item.price > 6);
    });
    
});

