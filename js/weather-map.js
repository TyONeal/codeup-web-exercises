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
    const forecastParent = document.querySelector('#insertForecast');
    const searchForm = document.querySelector('#searchForm');


//functions///////////////////

    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    } //Grabbing url from user interaction
    function initializeMap() {

        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 12,
            center: [-98.4916, 29.4252],

        }
        return new mapboxgl.Map(mapOptions);
    } //Map Loader
    function hideIcon() {
        document.querySelector('#search-icon').style.backgroundImage = 'none';
        document.querySelector('.forecast').classList.remove('show')
    } //Hiding search icon on mouseover (Unused due to color contrast)
    function renderForecast(city, day) {
        const forecast = document.createElement('div');
        forecastParent.innerHTML = ''
        forecast.classList.add('forecast')
        forecast.innerHTML = `
                <div class="close">
                  X
                </div>
                <p class="paragraph-city-name">
                  <span class="span-city-name">${city}</span>
                </p>
                <h3 class="justify-center">
                    The temperature is currently: ${day.main.temp}°<br>
                    This feels like ${day.main.feels_like}° <br>
                    The current weather condition is: ${day.weather[0].main}
                </h3>
        `;
        const close = forecast.querySelector('.close');
        close.addEventListener('click', () => {
           forecast.remove();
        });
        forecastParent.appendChild(forecast);

    }
    function renderCards(coordinates) {
            const cards = document.querySelector('.sidebar .cards')
            const searchCoords = getWeatherURL(coordinates[1], coordinates[0])
            $.ajax(searchCoords).done((data) => {
                cards.innerHTML = '';
                console.log(data)
                data.list.forEach((day, index) => {
                    const cardDate = new Date(day.dt * 1000);
                    if (index % 8 === 0) {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.innerHTML = `
                            <img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png" class="card-icon" alt="icon">
                            <p class="card-date-header">${months[cardDate.getMonth().valueOf()].toUpperCase()}</p>
                            <p class="card-date">${cardDate.getDate()}</p>
                        `;
                        card.addEventListener('click', ()=>{
                            renderForecast(data.city.name, day);
                        });
                        cards.appendChild(card);
                    }
                })
            })
        }
    function renderSearch(map, searchTerm) {
        geocode(searchTerm, MAPBOX_TOKEN).then((coords) => {
           renderCards(coords);
           map.flyTo({
               zoom: 15,
               center: coords
           })

            let marker = new mapboxgl.Marker({draggable: true});
            marker.setLngLat(coords).addTo(map);
            marker.addTo(map);
            marker.on('dragend', () => {
               map.flyTo({
                   center: marker.getLngLat(),
                   zoom: 15
               })
              let markerCoords = marker.getLngLat()
                console.log(markerCoords)
                renderCards(markerCoords.lat.toString(), markerCoords.lng.toString());
            });
        });
    }



//events//////////////////////

    searchForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        let inputValue = document.querySelector('#search')
        let searchTerm = inputValue.value;
        inputValue.value = ''
        renderSearch(map, searchTerm);
    });

//perform on page load/////////////


    renderCards([-98.4916, 29.4252]);

});