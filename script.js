const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


//category filter
function displayRecipes(categoryId) {
    let filteredRecipes = recipes;

    switch (categoryId) {
        case 'cat-1':
            filteredRecipes = recipes;
            console.log(filteredRecipes);
            break;
        case 'cat-2':
            filteredRecipes = recipes.filter(recipe => recipe.type === 'veg');
            console.log(filteredRecipes);
            break;
        case 'cat-3':
            filteredRecipes = recipes.filter(recipe => recipe.type === 'non-veg');
            console.log(filteredRecipes);
            break;
        default:
            filteredRecipes = recipes;
            console.log(filteredRecipes);
            break;
    }

    displayCards(filteredRecipes);
}

function displayCards(recipes){
    const container = document.querySelector('.recipes-container .recipe-cards');
    recipes.forEach(recipe => {
        const cardClone = document.querySelector('.card').cloneNode(true);
        
        cardClone.querySelector('.rec-img').src = recipe.imageSrc;
        cardClone.querySelector('.rec-type').textContent = recipe.type.charAt(0).toUpperCase() + recipe.type.slice(1);
        cardClone.querySelector('.rec-name').textContent = recipe.name;
        cardClone.querySelector('.rec-rating').textContent = recipe.rating;
        cardClone.querySelector('.time').textContent = recipe.time;
    
        container.appendChild(cardClone);
    });

}

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        const categoryId = this.id;
        displayRecipes(categoryId);
    });
});

displayCards(recipes);


// liked items

let likedItems = [];

function toggleLike(recipeName) {
    const index = likedItems.indexOf(recipeName);
    if (index === -1) {
        likedItems.push(recipeName);
    } else {
        likedItems.splice(index, 1);
    }
}

document.querySelectorAll('.like').forEach((heartIcon, index) => {
    heartIcon.addEventListener('click', function () {
        const recipeName = recipes[index].name;
        toggleLike(recipeName);
        updateHeartAppearance(heartIcon, recipeName);
    });
});


function updateHeartAppearance(heartIcon, recipeName) {
    if (likedItems.includes(recipeName)) {
        heartIcon.classList.add('active'); // You can also change the icon or color here
    } else {
        heartIcon.classList.remove('active'); // Reset back to original appearance
    }
}