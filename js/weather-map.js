//////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(() => {


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Weather Map Functionality////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//global variables////////////

    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const map = initializeMap();
    // const weather = initializeWeather();
    const searchCoordinates = [];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let slidePage;
    let forecastEdit;


//functions///////////////////

    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    } //Grabbing url from user interaction
    function initializeMap() {

        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 11,
            center: [-98.4916, 29.4252],

        }
        return new mapboxgl.Map(mapOptions);
    } //Map Loader
    function hideIcon(self) {
        self.style.backgroundImage = 'none';
    } //Hiding search icon on mouseover

    function populateSlide() {
        slidePage.classList.add('hidden-box')
            const userValue = userInput.value;
            geocode(userInput.value, MAPBOX_TOKEN).then((userSearch) => {
                searchCoordinates.push(userSearch);
                const searchedCoordinates = getWeatherURL(userSearch[1], userSearch[0]);


                $.ajax(searchedCoordinates).done(data => {
                    console.log(data);
                    console.log(data.city.name);


                    forecastEdit = document.querySelector('.forecast');
                    forecastEdit.addHTML += (`
                    
                        <div class="row non-hidden-box grow full-width">
                            <h3 class="justify-center">The temperature is currently: ${data.list[0].main.temp}°<br>
                                This feels like ${data.list[0].main.feels_like}° <br>
                                The current weather condition is: ${data.list[0].weather[0].main}</h3>
                            <p>     The current weather description is ${data.list[0].weather[0].description}</p>     
                        </div> 
                        
                
                
                `)
                }).fail(console.error)
            });
        searchCoordinates.shift()
        }




//events//////////////////////

    const userInput = document.querySelector('#search')
        userInput.addEventListener('keyup', (e) => {
            if (e.code === 'Enter') {
                const userVal = userInput.value;
            geocode(`${userVal}`, MAPBOX_TOKEN).then((userSearch) => {
                console.log("user search array " + userSearch);
                map.flyTo({zoom: 10, center: userSearch});
                searchCoordinates.push(userSearch);
                const searchedCoordinates = getWeatherURL(userSearch[1], userSearch[0]);
                console.log("searched coords are : " +searchedCoordinates);



                $.ajax(searchedCoordinates).done(data => {
                    console.log(data);
                    console.log(data.city.name);



                 forecastEdit = document.querySelector('.forecast');
                forecastEdit.innerHTML = (`
                  <div class="column grow full-width">
                    <div class="row non-hidden-box grow full-width">
                        <p class="paragraph-city-name">
                            <span class="span-city-name">${data.city.name}</span>
                        </p>
                    </div>

                `)
                }).fail(console.error);
            });
            userInput.value = '';
            searchCoordinates.shift()
          console.log(searchCoordinates);
        }
    });   //Search Functionality



    const searchHover = document.querySelector('#search');
        searchHover.addEventListener('focus', hideIcon);

    const searchClick = document.querySelector('#search');
        searchClick.addEventListener('click', (e) => {
            console.log(searchClick);
            slidePage.classList.remove('hidden-box')
        });

    const card1 = document.querySelector('.card1');
        card1.addEventListener('click', populateSlide);
    const card2 = document.querySelector('.card2');
    card2.addEventListener('click', (e) => {
        console.log(e.target);
        slidePage.classList.add('hidden-box')
    });
    const card3 = document.querySelector('.card3');
    card3.addEventListener('click', (e) => {
        console.log(e.target);
        slidePage.classList.add('hidden-box')
    });
    const card4 = document.querySelector('.card4');
    card4.addEventListener('click', (e) => {
        console.log(e.target);
        slidePage.classList.add('hidden-box')
    });
    const card5 = document.querySelector('.card5');
    card5.addEventListener('click', (e) => {
        console.log(e.target);
        slidePage.classList.add('hidden-box')
    });

    slidePage = document.querySelector('.non-hidden-box');

    const card = document.querySelector('.card');








//perform on page load/////////////


const cardDate = new Date();
console.log(cardDate.getDate());
        card1.innerHTML = (`
    <div>
        <p class="card-date-header">${months[cardDate.getMonth().valueOf()].toUpperCase()}</p>
        <p class="card-date">${cardDate.getDate()}</p>
    </div>
        `)
        card2.innerHTML = (`
    <div>
        <p class="card-date-header">${months[cardDate.getMonth().valueOf()].toUpperCase()}</p>
        <p class=" card-date">${cardDate.getDate() + 1}</p>
    </div>
        `)
        card3.innerHTML = (`
    <div>
        <p class="card-date-header">${months[cardDate.getMonth().valueOf()].toUpperCase()}</p>
        <p class=" card-date">${cardDate.getDate() + 2}</p>
    </div>
        `)
        card4.innerHTML = (`
    <div>
        <p class="card-date-header">${months[cardDate.getMonth().valueOf()].toUpperCase()}</p>
        <p class=" card-date">${cardDate.getDate() + 3}</p>
    </div>
        `)
        card5.innerHTML = (`
    <div>
        <p class="card-date-header">${months[cardDate.getMonth().valueOf()].toUpperCase()}</p>
        <p class=" card-date">${cardDate.getDate() + 4}</p>
    </div>
       `)
});