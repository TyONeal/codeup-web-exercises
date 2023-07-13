"use strict"

$.ajax("data/inventory.json")
    .done(function(jsonData) {
        console.log(jsonData);
        renderTools(jsonData);

});

//functions
function renderTools(tools) {
        for (let tool of tools) {
                $('#insertProducts').append(`
                       <tr>
                            <td class="table-font">
                                ${tool.title}
                            </td>
                            <td class="table-font">
                                ${tool.quantity}
                            </td>
                            <td class="table-font">
                                ${tool.price}
                            </td>
                            <td class="table-font">
                                ${tool.categories}
                            </td>
                            <td>
                                <button type="button" class="btn-outline-success btn">Purchase</button>
                            </td>
                        </tr>
                       
                `)

        }
}
function resetTheWindow() {
    $('table').refresh();
}



//

$('.reset-btn').on('click', renderTools);

