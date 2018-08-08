function templateBooks(img, title, id) { //Colocando en el template los resultados de libros
    const templateBooks =
        `<div id="response-container" class="col s4 m4 l4"> 
    <img src="${img}"/>
    <h6 data-target="modalBooks" class="imgClick title waves-effect blue-grey darken-2 btn modal-trigger" onclick= prueba(this)>${title}</h6>
    <p>${id}</p>    
    </div>`

    return templateBooks
}

$(document).ready(function(){
    $('.modal').modal();
    console.log("MODAL");
  });


function prueba(element) {
    console.log(element);
    let elementData = element.parentElement
    let imgData = elementData.firstElementChild;
    console.log(elementData);
    
    let titleData = element.firstChild;
    console.log(titleData);

 //Asignando la data al modal

//  console.log($("#tituloModal"));
//  console.log(document.getElementById("tituloModal"));
 
//  console.log($("#imagenModal"));

//  console.log(titleData);

       // $("#tituloModal").html( titleData );

       // $('#imagenModal').html(imgData);

       $('#modalData').append(
        `<div class="modal-content">
        <h4 id="tituloModal">${titleData}</h4>
        <ul>
            <li id="imagenModal">${imgData}</li>
        </ul>
    </div>
    <div class="modal-footer">
        <a href="#home" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
   </div>`

       )
         

} 

function templateComics(img, title) { //Colocando en el template los resultados de comics
    const templateComics =
        `<div id="response-container" class="col s4 m4 l4"> 
    <img src="${img}"/>
    <h6 class="title">${title}</h6>
    </div>`

    return templateComics;
}

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
            let modalData = element.id;
            // console.log(img, title, modalData);
 
            $("#containerBooks").append(templateBooks(img, title)); //Asignando la data al contenedor

        })

    });

    dir = "https://api.mercadolibre.com/sites/MLM/search?q=comics" //Obteniendo data de la url para comics

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

    });

})