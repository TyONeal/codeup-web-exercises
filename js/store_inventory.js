"use strict"

$.ajax("data/inventory.json")
    .done(function(data) {
    console.log(data);
    $('body').append('products');
})