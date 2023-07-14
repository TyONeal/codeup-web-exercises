$(() => {
   //variables
    const map = initializeMap();
    const restArray = [
        {"name": "Crown Burger", "address": "377 E 200 S Salt Lake City UT 84111"},
        {"name":"Sushi Seven", "address": "5138 UTSA Boulevard Suite 104, San Antonio, TX 78249"},
        {"name": "Burger Bar", "address": "5291 South 1900 West Roy, UT 84067"}
    ];







    //functions

    function initializeMap() {

        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 11,
            center: [-98.4916, 29.4252],

        }
        return new mapboxgl.Map(mapOptions);
    }
    function favoriteRestaurant() {
        geocode('The Copper Onion', MAPBOX_TOKEN).then((data) => {
            map.setCenter(data)
                .flyTo({zoom:15})
            const restaurantPopup = new mapboxgl.Popup()
                .setHTML(`<h2><a href="https://www.thecopperonion.com/">The Copper Onion!</a></h2>
                            <p>The Copper Onion is my favorite restaurant in Salt Lake City! They have a variety of different foods as well as beers.</p>
                            <img style="height: 80px; width: 80px;" src="../img/copper-onion.jpeg">
                            <p>For fine dining this place is second to none!</p>`)
                restaurantPopup.addTo(map)
            const restaurantMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(restaurantPopup)
            });

    }

    function displayThreeRestaurants() {
        restArray.forEach(function(rest) {
            geocode(rest.address, MAPBOX_TOKEN).then((restLocation) => {
               const restMarker = new mapboxgl.Marker()
                   .setLngLat(restLocation)
                   .addTo(map)
           });
        });
    }


        //events
         document.querySelector('#rest-btn').addEventListener('click', favoriteRestaurant)
         document.querySelector('#zoom1').addEventListener('select', () => {
           map.setCenter()
               .flyTo({zoom: 20});
        });


        //perform at load

displayThreeRestaurants();




});