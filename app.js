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

 

Product.all = [];
Product.counter = 0;

for( let i = 0; i < productsArray.length; i++ ) {
  new Product( productsArray[i] );
}

// let indexArray =[];

function renderNewProduct() {
  let leftIndex = randomNumber( 2, Product.all.length - 3 );
    if (Product.counter % 2 == leftIndex % 2){
      leftIndex += 0
    } else{
      leftIndex += 1
    }
    leftImage.src = Product.all[leftIndex].image;
    leftImage.alt = Product.all[leftIndex].name;
    leftProductIndex = leftIndex;

    let centerIndex = leftIndex - 2;
    // do {
    //   centerIndex = randomNumber( 0, Product.all.length - 1 );
    //   if (Product.counter % 2 == centerIndex % 2){
    //     centerIndex += 0
    //   } else{
    //     centerIndex += 1
    //   }
    // } while( leftIndex == centerIndex );

    centerImage.src = Product.all[centerIndex].image;
    centerImage.alt = Product.all[centerIndex].name;
    centerProductIndex = centerIndex;

    let rightIndex = leftIndex + 2;
    if (rightIndex == 20){
       rightIndex = rightIndex - 20;
    }
    // do {
    //   rightIndex = randomNumber( 0, Product.all.length - 1 );
    //   if (Product.counter % 2 == rightIndex % 2){
    //     rightIndex += 0
    //   } else{
    //     rightIndex += 1
    //   }
    // } while( leftIndex == rightIndex || centerIndex == rightIndex);
  
    rightImage.src = Product.all[rightIndex].image;
    rightImage.alt = Product.all[rightIndex].name;
    rightProductIndex = rightIndex;
  
    Product.all[leftIndex].shown++;
    Product.all[centerIndex].shown++;
    Product.all[rightIndex].shown++;
  
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
      
    } else{
      renderChart();
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
      
    //      Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    // if (Product.counter % 2 == randomNumber % 2){
      return Math.floor( Math.random() * ( max - min + 1 ) ) + min;;
      // }
      //  else{     
      //   return Math.ceil( Math.random() * ( max - min + 1 ) ) + min;
      // }

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

  function renderChart(){
    let shownArray = [];
    let clicksArray = [];
    for( let i = 0; i < Product.all.length; i++){
      shownArray.push(Product.all[i].shown);
      clicksArray.push(Product.all[i].clicks);
    }
  

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [ 'bag', 'banana','bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],
          datasets: [{
              label: '# of show times',
              data: shownArray,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1
          },
          {
            label: '# of Clicks',
            data: clicksArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}
  
  