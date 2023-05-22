//api de recetas
//generador de platillos y descripcion
//objetivo: generar platillos cuando el usuario busca el nombre del platillo

const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');



// event listeners 
//genera la lista hace un call de los elementos
searchBtn.addEventListener('click', ApiList);

// function 
function ApiList() {
    let searchInput = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                <div class="card shadow-sm" data-id = "${meal.idMeal}">
                <img src = "${meal.strMealThumb}" alt = "food"class="meal-img">
                    <div class="card-body">
                    <p class="card-text"> ${meal.strMeal}</p>
                    <p class = "card-text">receta  </p>
                    
                    </div>
                </div>
                </div>
            </div>
                `;
                });

            } else {
                html = "error!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}


