const products = [
  {
    image: 'images/pic-0.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 149.99,
      offPrice:169.99  
    }
  },
  {
    image: 'images/pic-1.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 249.69,
      offPrice:399.01 
    }
  },
  {
    image: 'images/pic-2.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 200.99,
      offPrice:269.99  
    }
  },
  {
    image: 'images/pic-3.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 400.09,
      offPrice:500.99  
    }
  },
  {
    image: 'images/pic-4.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 290.99,
      offPrice:309.99  
    }
  },
  {
    image: 'images/pic-5.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 849.01,
      offPrice:999.62  
    }
  },
  {
    image: 'images/pic-6.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 539.99,
      offPrice:769.00  
    }
  },
  {
    image: 'images/pic-7.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 249.99,
      offPrice:369.80  
    }
  },
  {
    image: 'images/pic-8.jpg',
    text : {
      title: 'Gabrielle Essence Eau De Parfum',
      writUp: 'A floral, solar and voluptuous interpretaions composed by Olivier Davell, Perfume-promoterfor the House of INFALLIBLE',
      price: 1849.90,
      offPrice:2699.99  
    }
  }
]




// variables

let thePic = document.querySelector('.thePic');
let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn');
let title = document.querySelector('.title');
let writeUp = document.querySelector('.writeUp');
let price = document.querySelector('.price');
let offPrice = document.querySelector('.offPrice');
let container = document.querySelector('.container');
let load = document.querySelector('.load');
let loadSpan = document.querySelector('.load span');
let addBtn = document.querySelector('.container button');


const MAX = products.length;
let current = 0;

// defalt way of presentation 
thePic.src = products[current].image
title.innerText = products[current].text.title
writeUp.innerText = products[current].text.writUp
price.innerText = `$${products[current].text.price}`
offPrice.innerText = `$${products[current].text.offPrice}`


rightBtn.addEventListener('click',()=>{
  if(current != MAX){
    current ++;
    thePic.src = products[current].image
    title.innerText = products[current].text.title
    writeUp.innerText = products[current].text.writUp
    price.innerText = `$${products[current].text.price}`
    offPrice.innerText = `$${products[current].text.offPrice}`
  }else{
    current = 0
  }
});


leftBtn.addEventListener('click',()=>{
  if(current != MAX){
    current --;
    thePic.src = products[current].image
    title.innerText= products[current].text.title
    writeUp.innerText = products[current].text.writUp
    price.innerText = `$${products[current].text.price}`
    offPrice.innerText = `$${products[current].text.offPrice}`
  }else{
    current = 9
  }
});


load.style.display = 'none'

addBtn.addEventListener('click', ()=>{
  load.style.display = 'flex'
  let thewidth  = '20';
  setInterval(()=>{
    loadSpan.style.width =  thewidth++ + 'px'
  }, 5)

  setTimeout(()=>{
    load.style.display = 'none'
    loadSpan.style.width =  '0px'
  }, 1000)
})
thewidth  = '0';
loadSpan.style.width =  '0px'

