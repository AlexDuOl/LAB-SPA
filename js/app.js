//*****Inicializando MODAL******//
$(document).ready(function() {
    $('.modal').modal();
});

//*****TEMPLATE******//
function templateBooks(img, title, id) { //Colocando en el template los resultados de libros
    const templateBooks =
        `<div id="response-container" class="col s4 m4 l4"> 
    <img src="${img}"/>
    <h6 data-target="modalBooks" class="title waves-effect blue-grey darken-2 btn modal-trigger" onclick= data(this)>${title}</h6>
    <h6>${id}</h6>    
    </div>`

    return templateBooks
}


//*****MODAL******//
function data(element) {
    console.log(element);
    let elementData = element.parentElement
    let imgData = elementData.firstElementChild;
    let titleData = element.firstChild;
    let idData = element.lastChild;


    //Asignando la data al modal

    $('#tituloModal').html(titleData);
    $('#imagenModal').html(imgData);
    $('#idData').html(idData);


    $('#modalData').append(
        `<div class="modal-content">
        <h4 id="tituloModal">${titleData}</h4>
        <ul>
            <li id="imagenModal">${imgData}</li>
            <li id="imagenModal">${idData}</li>
        </ul>
    </div>
    <div class="modal-footer">
        <a href="#home" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
   </div>`

    )

}

//*****OBTENIENDO DATA PARA TEMPLATE******//
$(document).ready(function() {
    dir = "https://api.mercadolibre.com/sites/MLM/search?q=libros" //Obteniendo data de la url para libros

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
            let idData = element.id;
            // console.log(img, title, modalData);

            $("#containerBooks").append(templateBooks(img, title, idData)); //Asignando la data al contenedor

        })

    });

})