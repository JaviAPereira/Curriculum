//Mediante este Listener, ira hacia arriba del todo en la pagina
const inicio = document.getElementById("inicio")
    inicio.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
//Este evento envia el formulario y lo resetea. Nota: el formulario solo se resetea y no se envia a ningun lado, estaria orientado al backend
const formulario = document.getElementById("form")
    addEventListener("submit");
    formulario.reset();
//Este evento envia una alerta con un pop-up emergente luego de enviar el formulario.
function alerta(){  
    alert("Me pondre en contacto contigo lo antes posible.");
    alert("Gracias!");

}