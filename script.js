const recipes = {
    croissant: {
        image: "images/croissant.png",
        text: "<h2>Croissant - 30mins</h2><h4>Description:</h4><p>Flaky, buttery, and full of Parisian attitude—this crescent-shaped delight is a hug in pastry form. One bite and you’ll say “oui oui” to another!</p><h4>Serving Size: 6–8 croissants</h4><h4>Ingredients</h4><ul  class='ingredients'><li>Flour</li><li>Butter</li><li>Yeast</li><li>Milk</li><li>Sugar</li></ul><h4>Steps</h4><ol class='steps'><li>Prepare dough</li><li>Layer butter</li><li>Roll and fold</li><li>Cut and shape</li><li>Bake</li></ol>"
    },
    tart: {
        image: "images/tart.jpg",
        text: "<h2>Tart - 25mins</h2><h4>Description:</h4><p>A crispy crust with juicy secrets—this tart wears a crown of fruits like it owns a bakery kingdom. It’s basically dessert royalty, and you’re invited to the coronation!</p><h4>Serving Size: 1 tart (serves 6–8)</h4><h4>Ingredients</h4><ul class='ingredients'><li>Tart Shell</li><li>Cream</li><li>Fruits</li><li>Gelatin</li></ul><h4>Steps</h4><ol class='steps'><li>Bake shell</li><li>Add filling</li><li>Chill</li><li>Decorate with fruits</li></ol>"
    },
    cinnamon: {
        image: "images/cinammonroll.jpg",
        text: "<h2>Cinnamon Roll - 35mins</h2><h4>Description:</h4><p>Sweet, swirly, and sinfully soft—this roll is basically a warm hug with a sugar glaze. Caution: causes cinnamon-fueled joy.</p><h4>Serving Size: 8 rolls</h4><h4>Ingredients</h4><ul class='ingredients'><li>Dough</li><li>Cinnamon</li><li>Sugar</li><li>Butter</li></ul><h4>Steps</h4><ol class='steps'><li>Roll dough</li><li>Spread cinnamon mix</li><li>Roll and cut</li><li>Bake</li></ol>"
    },
    macaron: {
        image: "images/macaron.png",
        text: "<h2>Macaron - 40mins</h2><h4>Description:</h4><p>Delicate, colorful, and a little diva—this French cookie may be tiny, but it’s got BIG attitude. Crunch outside, cloud inside… like edible pastel hugs!</p><h4>Serving Size: 12 macarons</h4><h4>Ingredients</h4><ul class='ingredients'><li>Almond flour</li><li>Egg whites</li><li>Sugar</li><li>Filling</li></ul><h4>Steps</h4><ol class='steps'><li>Whisk eggs</li><li>Mix batter</li><li>Pipe and rest</li><li>Bake</li><li>Fill</li></ol>"
    },
    brownie: {
        image: "images/brownie.jpg",
        text: "<h2>Brownie - 20mins</h2><h4>Description:</h4><p>Dark, dense, and dangerously delicious—this gooey square is chocolate therapy in edible form. The only drama you need in life is in its fudgy center!</p><h4>Serving Size: 9 brownies</h4><h4>Ingredients</h4><ul class='ingredients'><li>Chocolate</li><li>Flour</li><li>Eggs</li><li>Butter</li><li>Sugar</li></ul><h4>Steps</h4><ol class='steps'><li>Melt chocolate</li><li>Mix ingredients</li><li>Pour in pan</li><li>Bake</li></ol>"
    },
    cupcake: {
        image: "images/cupcake.jpg",
        text: "<h2>Cupcake - 15mins</h2><h4>Description:</h4><p>Tiny cake, big personality. This cutie delivers a whole party in a single bite—with frosting flair! Warning: one is never enough.</p><h4>Serving Size: 8–10 cupcakes</h4><h4>Ingredients</h4><ul class='ingredients'><li>Flour</li><li>Eggs</li><li>Butter</li><li>Sugar</li><li>Frosting</li></ul><h4>Steps</h4><ol class='steps'><li>Mix batter</li><li>Pour into cups</li><li>Bake</li><li>Decorate</li></ol>"
    }
};

const handlePrint = () => {
  try {
    const content = document.getElementById("recipeCard").outerHTML;
    const printWindow = window.open('', '_blank'); // Open a new tab

    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Recipe</title>
          <style>
            /* Add any CSS you need here to style the print view */
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          ${content}
        </body>
      </html>
    `);
    printWindow.document.close();
  } catch (e) {
    console.error('Error while trying to print:', e);
  }
};


document.querySelectorAll('.dish').forEach(dish => {
    dish.addEventListener('click', () => {
        const dishName = dish.dataset.dish;
        const recipe = recipes[dishName];
        document.getElementById('recipeText').innerHTML = recipe.text;
        document.getElementById('recipeImage').innerHTML = `<img src="${recipe.image}" alt="${dishName}">`;
        document.getElementById('recipeCard').style.display = 'block';
 
    });
});

document.getElementById('doneBtn').addEventListener('click', () => {
    document.getElementById('recipeCard').style.display = 'none';

});

window.addEventListener("click", function(e) {
    const card = document.getElementById("recipeCard");
    if (card.style.display === "block" && !card.contains(e.target) && !e.target.closest(".dish")) {
        card.style.display = "none";
    }
});


