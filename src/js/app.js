
document.addEventListener('DOMContentLoaded', function(){
   crearGaleria()

})

function crearGaleria() {
   const totalImagenes = 16;
   const galeria = document.querySelector('.galeria-imagenes')

   for(i = 1; i <= totalImagenes; i++){
      const imagen = document.createElement('IMG')
      imagen.src = `src/img/gallery/full/${i}.jpg`
      imagen.alt = 'Imagen Galeria'

      // console.log(imagen)

      // event handlerc (click)
      imagen.onclick = function(e) {
         const imgName = e.target.src.split('/')[7]
         const imgNumber = +imgName.split('.')[0]

         mostrarImage(imgNumber)
      }

      galeria.appendChild(imagen);
   }
}


function mostrarImage(i) {
   // creamos la imagen
   const imagen = document.createElement('IMG')
   imagen.src = `src/img/gallery/full/${i}.jpg`
   imagen.alt = `Imagen Galeria ${i}`
   // console.log(imagen)

   // construir overlay que muestra la imagen mas grande
   //! crear modal
   const modal = document.createElement('DIV')
   modal.classList.add('modal')
   modal.onclick = cerrarModal

   //! boton cerrar modal
   const cerrarModalBtn = document.createElement('BUTTON')
   cerrarModalBtn.textContent = 'X'
   cerrarModalBtn.classList.add('btn-cerrar')
   cerrarModalBtn.onclick = cerrarModal

   //agregamos la imagen al modal y el boton
   modal.appendChild(imagen)
   modal.appendChild(cerrarModalBtn)

   // //! agregar modal al HTML
   const body = document.querySelector('body')
   body.classList.add('overflow-hidden')
   body.appendChild(modal);
}

function cerrarModal() {
   const modal = document.querySelector('.modal')
   modal.classList.add('fade-out');

   setTimeout(() => {
      modal?.remove()
      const body = document.querySelector('body')
      body.classList.remove('overflow-hidden')
   }, 500);
}



// galeria.addEventListener('click', function(e) {
//    const imgSelect = e.target.src.split('/')[7]
//    console.log(imgSelect)
// })
