
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

      galeria.appendChild(imagen);

      console.log(imagen)
   }
}
