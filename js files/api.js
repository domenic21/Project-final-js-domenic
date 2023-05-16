//api de recetas
//generador de platillos y descripcion
//objetivo: generar platillos cuando el usuario busca el nombre del platillo

const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');



// event listeners 
//genera la lista hace un call de los elementos
searchBtn.addEventListener('click', ApiList);

// function 
function ApiList(){
    let searchInput = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            
                        </div>
                    </div>
                `;
            });
            
        } else{
          html= "error!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


