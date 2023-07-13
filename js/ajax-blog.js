$.ajax('data/blog.json')
    .done(function(blogData) {
        console.log(blogData);
        renderBlogs(blogData);
});

$.ajax({
        type: "POST",
        url: 'data/blog.json',
        data: 'Winter sports enthusiasts eagerly await the arrival of snowy peaks and frosty landscapes, as they signify the beginning of an exhilarating ski season. Theres something magical about strapping on a pair of skis and gliding effortlessly down powdery slopes, feeling the crisp mountain air brushing against your face. Skiing is more than just a sport; its an immersive experience that connects us with nature in its purest form.',
        success: success,
        dataType: dataType,
});


//functionality
function renderBlogs(blogs) {
    for (let blog of blogs) {
        $('.posts').append(`
        
           <h2 class ="h2 ">
                ${blog.title}    
            </h2>
            
            <p class="lead">
                ${blog.content}
            </p>
        
        
        `)
    }
}