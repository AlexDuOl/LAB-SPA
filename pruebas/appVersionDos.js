//*****Inicializando MODAL******//
$(document).ready(function() {
    $('.modal').modal();
    console.log("MODAL");
});


//*****TEMPLATE******//
function templateComics(titleData, imgData) { //Colocando en el template los resultados de comics
    var templateComics =
        `<div id="response-container" class="col s4 m4 l4">
            <h6 class="title blue-grey darken-2">${titleData}</h6>
            <a href="#modal" data-target="modalBooks"><img src="${imgData}"/></a>
        </div>`

    return templateComics
}

//*****OBTENIENDO DATA******//

$(document).ready(function() {
    dir = "https://api.mercadolibre.com/sites/MLM/search?q=comics" //Obteniendo data de la url para libros

    $.ajax({
        url: dir,
        onError: function(err) {
            alert(err);
        }

    }).done(function(data) {
        console.log(data);

        var arrayData = data.results; //Entrando al array y obteniendo los datos necesarios

        arrayData.forEach(function(element) {
                var imgData = element.thumbnail;
                var titleData = element.title;
                var modalData = element.id;
                //console.log(imgData, titleData, modalData);

                $("#containerComics").append(templateComics(imgData, titleData, modalData)); //Asignando la data al contenedor

            })
            //*****MODAL******//

        function clickModal(element) {
            //console.log(element);
            var elementData = element.parentElement
            var imgData = elementData.firstElementChild;
            var titleData = element.firstChild;
            var idData = element.lastChild;
            //console.log(elementData);
            //console.log(titleData);
            //  console.log($("#tituloModal"));
            //  console.log(document.getElementById("tituloModal"));
            //  console.log($("#imagenModal"));
            //  console.log(titleData);

            //Asignando la data al modal

            $("#tituloModal").html(titleData);
            $('#imagenModal').html(imgData);
            $('#imagenModal').html(idData);

            $('#modalData').append(
                `<div class="modal-content">
                    <h4 id="tituloModal">${titleData}</h4>
                    <ul>
                        <li id="imagenModal">${imgData}</li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <a href="#libros" class="modal-close waves-effect waves-green btn-flat")>Cerrar</a>
               </div>`

            )
        }

    })

})









/*

function modal(element) {
            //console.log(element);
    
/
$('#modalData').append(
    `<div class="modal-content">
            <h4 class="title blue-grey darken-2">${titleData}</h4>
                <ul>
                    <li id="imagenModal">${imgData}</li>
                    <li id="idModal">${modalData}</li>        
                </ul>
            </div>
            <div class="modal-footer">
                <a href="#comics" class="modal-close waves-effect waves-green btn-flat")>Cerrar</a>
            </div>`

)
return (modal)

}


Para segundo alcance, mostrar dos tipos de productos


function templateBooks(img, title) { //Colocando en el template los resultados de libros
    const templateBooks =
        `<div id="response-container" class="col s4 m4 l4"> 
    <img src="${img}"/>
    <h6 class="title">${title}</h6>
    </div>`

    return templateBooks;
}

dir = "https://api.mercadolibre.com/sites/MLM/search?q=libros" //Obteniendo data de la url para comics

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
        // console.log(img, title);

        $("#containerComics").append(templateComics(img, title)); //Asignando la data al contenedor

    })

});*/