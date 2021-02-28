'use strict'
let productsArray = [ 'bag', 'banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

const imageSection = document.getElementById( 'imageSection' );
const leftImage = document.getElementById( 'leftImage' );
const centerImage = document.getElementById( 'centerImage' );
const rightImage = document.getElementById( 'rightImage' );

let leftProductIndex = 0;
let centerProductIndex = 0;
let rightProductIndex = 0;
const clickCounter = 25;

function Product( name ) {
    this.name = name;
    this.image = function image(){
      if (this.name == 'sweep'){
        this.image = `./Img/${name}.png`;
    }
    else if(this.name == 'usb'){
        this.image = `./Img/${name}.gif`;
    }
    else {
        this.image = `./Img/${name}.jpg`;
    }
    
    };
    this.clicks = 0;
    this.shown = 0;
    Product.all.push( this );
  this.image();
}


// Product.prototype.render = function() {

//     if (this.image == 'sweep'){
//         this.image =  `./Img/${name}.png`
//     }
//     else if(this.image == 'usb'){
//         this.image = `./Img/${name}.gif`
//     }
//     else {
//         this.image = `./Img/${name}.jpg`
//     }
    
  // };
  

 

Product.all = [];
Product.counter = 0;

for( let i = 0; i < productsArray.length; i++ ) {
  new Product( productsArray[i] );
}



function renderNewProduct() {
    let leftIndex = randomNumber( 0, Product.all.length - 1 );
    leftImage.src = Product.all[leftIndex].image;
    leftImage.alt = Product.all[leftIndex].name;
    leftProductIndex = leftIndex;

    let centerIndex;
    do {
      centerIndex = randomNumber( 0, Product.all.length - 1 );
    } while( leftIndex == centerIndex );

    centerImage.src = Product.all[centerIndex].image;
    centerImage.alt = Product.all[centerIndex].name;
    centerProductIndex = centerIndex;

    let rightIndex;
    do {
      rightIndex = randomNumber( 0, Product.all.length - 1 );
    } while( leftIndex == rightIndex || centerIndex == rightIndex);
  
    rightImage.src = Product.all[rightIndex].image;
    rightImage.alt = Product.all[rightIndex].name;
    rightProductIndex = rightIndex;
  
    Product.all[leftIndex].shown++;
    Product.all[centerIndex].shown++;
    Product.all[rightIndex].shown++;
  
  
    // rightImage.src = Product.all[0].image;
  }
  
  showButton();

  function handleClick( event ) {
    
    if( Product.counter <= clickCounter ) {
      const clickedElement = event.target;
      if( clickedElement.id == 'leftImage' || clickedElement.id == 'centerImage' || clickedElement.id == 'rightImage' ) {
        if( clickedElement.id == 'leftImage' ) {
          Product.all[leftProductIndex].clicks++;
        }

        if( clickedElement.id == 'centerImage' ) {
            Product.all[centerProductIndex].clicks++;
          }
  
        if( clickedElement.id == 'rightImage' ) {
            Product.all[rightProductIndex].clicks++;
        }
        
        Product.counter++;
        renderNewProduct();
        showButton();
        
  
        console.log( Product.all );
      }
      
    }
   
    
  }

  imageSection.addEventListener( 'click', handleClick );

  console.log( Product.all );
  
  const parentElement = document.getElementById('result');
    
const ulElement = document.createElement('ul');

parentElement.appendChild(ulElement);

function viewResults(){
  for(let i = 0; i < productsArray.length; i++){
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = productsArray[i] + ' has a ' + Product.all[i].clicks + ' clicks and has been shown ' + Product.all[i].shown + ' times.';
            
    }
    
    
}


    // Helper function
    function randomNumber( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
     
    renderNewProduct();
    console.log(Product.counter);

    
    
  function showButton(){
    if (Product.counter > 25){
      btn.style.visibility = 'visible';
    }
    else{
      btn.style.visibility = 'hidden';
    }
  };
  //   function hideButtom(){

  //   if (this.image == 'sweep'){
  //       this.image =  `./Img/${name}.png`
  //   }
  //   else if(this.image == 'usb'){
  //       this.image = `./Img/${name}.gif`
  //   }
  //   else {
  //       this.image = `./Img/${name}.jpg`
  //   }
    
  // };
  
  
  