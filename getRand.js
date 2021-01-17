/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

// access key: 43af8fab8d7d4976903e8d9d4d580602
// c0eecd14196a46109494e72f89a7b781
//dfdf9fa71d5e42aea0913d151131b97a

$.getJSON(
  "https://api.spoonacular.com/recipes/random?apiKey=dfdf9fa71d5e42aea0913d151131b97a&number=1&tags=vegetarian,drink",
  function(data) {
    console.log(data);
    console.log(data.recipes[0].title);

    // $.each(data, function(index, value){console.log(value);})

    var name = data.recipes[0].title;
    console.log(name);
    var sourceN = data.recipes[0].sourceName;
    console.log(sourceN);
    var url = String(data.recipes[0].sourceUrl);
    console.log(url);
    var image = data.recipes[0].image;
    console.log(image);
    
    var dietTypes = data.recipes[0].diets;
    console.log(dietTypes);
    
    var score = data.recipes[0].healthScore;
    console.log(score)
    
    var min = data.recipes[0].readyInMinutes; 

    document.getElementById("recTitle").innerHTML = name;
    document.getElementById("publisher").innerHTML = sourceN;
    document.getElementById("publisher").href = url;
    document.getElementById("recImg").src = image;
    document.getElementById("mode").innerHTML = "<h2> Nutrition Facts: </h2> <br> Diets supported: <p>" + dietTypes.join("<br>") + "</p><br>Health Score:  " + score + "<br>Ready in " + min + " minutes";
  }
);