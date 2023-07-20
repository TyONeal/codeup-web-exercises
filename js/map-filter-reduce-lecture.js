(() => {


    //map
    const url ='./data/houses.json'
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => {
            console.log(houses);
            let housesTwoBedsPlus = houses.filter(house => {
               const nmrOfBaths = parseFloat(house.baths)
                return parseFloat(house.beds) >= 5 && nmrOfBaths >= 2;

            });
                console.log(housesTwoBedsPlus);

                //map method

            let housesPriceRange = houses.map(house => {
                const priceRange = 200_000;
                const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'Yes!'
                const newValue = `
                        Address: ${house.address},
                        Can I afford it: ${canBuy}`

                return newValue;
            });

            for(let house of housesPriceRange) {
                console.log(house);
            }

           const largestPrice =  houses.reduce((highestPrice, house) => {
                let price = parseFloat(house.price);
                if (price > highestPrice) {
                    highestPrice = price;
                }
                return highestPrice;
            }, 0)

            console.log(largestPrice);


        });




})();