// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((currentMushroom) => {
    if (state.mushrooms) {
      currentMushroom.style.visibility = 'visible';
    }
    else {
      currentMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((currentGreenPepper) => {
    if (state.greenPeppers) {
      currentGreenPepper.style.visibility = 'visible';
    }
    else {
      currentGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceSection = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceSection.classList.add('sauce-white');
  }
  else {
    sauceSection.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustSection = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustSection.classList.add('crust-gluten-free');
  }
  else {
    crustSection.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((currentButton) => {
        if (currentButton.classList.contains('btn-pepperoni')) {
          if (state.pepperoni) {
            currentButton.classList.add('active');
          }
          else {
            currentButton.classList.remove('active')
          }
        }
        else if (currentButton.classList.contains('btn-mushrooms')) {
          if (state.mushrooms) {
            currentButton.classList.add('active');
          }
          else {
            currentButton.classList.remove('active')
          }
        }
        else if (currentButton.classList.contains('btn-green-peppers')) {
          if (state.greenPeppers) {
            currentButton.classList.add('active');
          }
          else {
            currentButton.classList.remove('active')
          }
        }
        else if (currentButton.classList.contains('btn-sauce')) {
          if (state.whiteSauce) {
            currentButton.classList.add('active');
          }
          else {
            currentButton.classList.remove('active')
          }
        }
        else if (currentButton.classList.contains('btn-crust')) {
          if (state.glutenFreeCrust) {
            currentButton.classList.add('active');
          }
          else {
            currentButton.classList.remove('active')
          }
        }
    });
  } 

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceSection = document.querySelector('.panel.price');
  const priceList = priceSection.querySelector('ul');
  const priceListElements = priceList.querySelectorAll('li');
  const finalPriceElement = priceSection.querySelector('.final-price');
  let finalPrice = 10;

  priceListElements.forEach((currentListElement) => {
    if (currentListElement.classList.contains('pepperoni-price')) {
      if (state.pepperoni) {
        currentListElement.style.visibility = 'visible';
        finalPrice += 1;
      }
      else {
        currentListElement.style.visibility = 'hidden';
      }
    }
    else if (currentListElement.classList.contains('mushrooms-price')) {
      if (state.mushrooms) {
        currentListElement.style.visibility = 'visible';
        finalPrice += 1;
      }
      else {
        currentListElement.style.visibility = 'hidden';
      }
    }
    else if (currentListElement.classList.contains('green-peppers-price')) {
      if (state.greenPeppers) {
        currentListElement.style.visibility = 'visible';
        finalPrice += 1;
      }
      else {
        currentListElement.style.visibility = 'hidden';
      }
    }
    else if (currentListElement.classList.contains('sauce-price')) {
      if (state.whiteSauce) {
        currentListElement.style.visibility = 'visible';
        finalPrice += 3;
      }
      else {
        currentListElement.style.visibility = 'hidden';
      }
    }
    else if (currentListElement.classList.contains('crust-price')) {
      if (state.glutenFreeCrust) {
        currentListElement.style.visibility = 'visible';
        finalPrice += 5;
      }
      else {
        currentListElement.style.visibility = 'hidden';
      }
    }
  });
  const finalPriceString = "$" + finalPrice;
  finalPriceElement.innerHTML = finalPriceString;
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

renderEverything();