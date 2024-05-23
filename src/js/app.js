
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

      // event handlerc (click)
      imagen.onclick = function(e) {
         mostrarImage(i);
      }

      galeria.appendChild(imagen);
   }

   function mostrarImage(index) {
      // construir overlay que muestra la imagen mas grande
      //! crear modal
      const modal = document.createElement('DIV')
      modal.classList.add('modal')
      modal.onclick = cerrarModal

      //! agregar modal al HTML
      const body = document.querySelector('body')
      body.appendChild(modal);

      console.log(modal)
   }

   function cerrarModal() {
      const modal = document.querySelector('.modal')
      modal?.remove()
   }






   // galeria.addEventListener('click', function(e) {
   //    const imgSelect = e.target.src.split('/')[7]
   //    console.log(imgSelect)
   // })
}
