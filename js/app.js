function templateBooks(img, title) { //Colocando en el template los resultados
    const templateBooks =
        `<div id="response-container" class="col s4 m4 l4"> 
    <img class="imgWidth" src="${img}"/>
    <p class="title">${title}</p>
    </div>`

    return templateBooks
}

function templateComics(img, title) { //Colocando en el template los resultados
    const templateComics =
        `<div id="response-container" class="col s4 m4 l4"> 
    <img class="imgWidth" src="${img}"/>
    <p class="title">${title}</p>
    </div>`

    return templateImg;
}

$(document).ready(function() {
    dir = "https://api.mercadolibre.com/sites/MLM/search?q=libros" //Obteniendo data de la url para todos la data

    $.ajax({
        url: dir,
        onError: function(err) {
            alert(err);
        }

    }).done(function(data) {
        console.log(data);

        let arrayData = data.results; //Entrando al array y obteniendo los datos necesarios

        arrayData.forEach(function(element) {
            let img = element.thumbnail;
            let title = element.title;
            console.log(img, title);

            $("#container").append(template(img, title)); //Asignando la data al contenedor

        })

    });
    //PENDIENTE
    dir = "https://api.mercadolibre.com/sites/MLM/search?q=comics" //Obteniendo data de la url para todos la data

    $.ajax({
        url: dir,
        onError: function(err) {
            alert(err);
        }

    }).done(function(data) {
        console.log(data);

        let arrayData = data.results; //Entrando al array y obteniendo los datos necesarios

        arrayData.forEach(function(element) {
            let img = element.thumbnail;
            let title = element.title;
            console.log(img, title);

            $("#container").append(template(img, title)); //Asignando la data al contenedor

        })

    });

})