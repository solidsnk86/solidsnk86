<div align="left">
  <h3>¡He creado este badge contador de visitas! 👁️👁️</h3>
  
  <img src="https://neotecs.vercel.app/api/badge-counter?user=instructions-md&badge_gradient_2=2196f3&badge_gradient_1=eb3b5a&counter_color=FF7F50" alt="Contador de Visitas SolidSnk86" />

  Este badge permite llevar un conteo de cuántas veces se ha visitado tu perfil o algún recurso, y puedes personalizar sus colores fácilmente para que combine con tu estilo.

  ### Cómo usarlo
  Copia y pega esta etiqueta `<img />` HTML en el archivo `README.md` de tu perfil, reemplazando `"TU-USUARIO"` con tu nombre de usuario, también lo puedes pegar en tu archivo HTML de algún sitio:
  ```html
  <img src="https://neotecs.vercel.app/api/badge-counter?user=TU-USUARIO" alt="Contador de Visitas" />
  ```

  ### Personalización de colores
  Puedes cambiar los colores del badge y del contador añadiendo los siguientes parámetros a la URL:  
  - **`badge_color`**: Define el color del fondo principal del badge.  
  - **`counter_color`**: Cambia el color de fondo donde aparece el contador (el número).  

  Ambos valores deben ser especificados en formato hexadecimal, **sin incluir el símbolo `#`**.

  ### Ejemplo de uso
  Si quieres un badge con un fondo gris oscuro (`363A43`) y un contador azul (`364692`), recuerda poner user y tu nombre de usuario, la URL sería:
  ```html
  <img src="https://neotecs.vercel.app/api/badge-counter?user=TU_USUARIO&badge_gradient_2=363A43&counter_color=364692" alt="Contador de Visitas" />

  <!-- También puedes combinar dos colores en el gradiente de esta manera: --> 
   <img src="https://neotecs.vercel.app/api/badge-counter?user=TU-USUARIO&badge_gradient_2=FF46FF&badge_gradient_1=4868A9&counter_color=FF74A1" alt="Contador de Visitas" />

  ```
</div>
