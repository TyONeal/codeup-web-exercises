$(() => {

   //variables

    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();


   //functions

    //function that initializes map

    function initializeMap() {

        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 15,
            center: [-98.4916, 29.4252],

        }
            return new mapboxgl.Map(mapOptions);
    }
    //function that creates a marker at Codeup
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
    }
    //function that creates a popup
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
                <div>
                    <h2>Codeup!</h2>
                    <p>This is Codeup!</p>
                </div>
                    `)
            .addTo(map);
    }
    //function that uses geocode to bring me to Paris
    function goToParis() {
        geocode('Paris', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }
    //function that uses reverse geocode
    //Takes the coordinates from the coordinates of the screen
    //print on the screen the address
    function findAndPrintAddress() {
        const coords = map.getCenter()

        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`
        })

    }
    //function that uses geocode to take the string 'Tha Alamo, San Antonio'
    //get coordinates to set a marker and popup at that location
    function markAlamo() {
        geocode('The Alamo, San Antonio', MAPBOX_TOKEN).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML(`<p>Remember the Alamo!</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopup)
            alamoPopup.addTo(map)
        });
    }







   //events

    document.querySelector('#geocode-btn').addEventListener('click', goToParis)
    document.querySelector('#reverse-geocode-btn').addEventListener('click', findAndPrintAddress)
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo)

   // runs when the program loads
    marker.setPopup(popup);
    map.setZoom(2);







});