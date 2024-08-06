clase 1 angular: creacion de componentes y servicios.

/components
Aquí se almacenan los componentes individuales de la aplicación. Un componente en Angular es una clase con una plantilla asociada y estilos específicos.

ejemplo:
/components
  /header
    header.component.ts
    header.component.html
    header.component.scss
  /footer
    footer.component.ts
    footer.component.html
    footer.component.scss
<----------------------------------------------------------------------------------->
/models
Esta carpeta contiene los modelos de datos de la aplicación. Los modelos son interfaces o clases que definen la estructura de los datos que maneja la aplicación.

ejemplo
/models
  user.model.ts
  product.model.ts

<------------------------------------------------------------->
/services
Aquí se encuentran los servicios de la aplicación. Los servicios en Angular son clases que manejan la lógica de negocio y la interacción con APIs externas.

ejemplo:
/services
  user.service.ts
  product.service.ts
<---------------------------------------------------------------->
/modules
En esta carpeta se definen los módulos de la aplicación. Un módulo en Angular es una clase que agrupa componentes, directivas, tuberías y servicios relacionados.

ejemplo:
/modules
  /user
    user.module.ts
    user-routing.module.ts
  /product
    product.module.ts
    product-routing.module.ts

<------------------------------------------------------------------------>
/pages
Contiene los componentes que representan páginas completas o vistas de la aplicación.

ejemplo:
/pages
  /home
    home.component.ts
    home.component.html
    home.component.scss
  /about
    about.component.ts
    about.component.html
    about.component.scss

<--------------------------------------------------------------------------->
/shared
Aquí se ubican componentes, directivas y tuberías que se utilizan en múltiples lugares de la aplicación.

ejemplo:
/shared
  /components
    /button
      button.component.ts
      button.component.html
      button.component.scss
  /directives
    highlight.directive.ts
  /pipes
    date-format.pipe.ts

<------------------------------------------------------>
 Interacción entre Componentes, Modelos y Servicios:

Componentes: Utilizan servicios para obtener datos y mostrarlos en la vista. Los componentes tienen plantillas HTML y estilos CSS asociados.
Modelos: Definen la estructura de los datos que se utilizan en la aplicación. Los componentes y servicios interactúan con estos modelos para tipar y validar datos.
Servicios: Se encargan de la lógica de negocio y la comunicación con APIs. Los servicios inyectan datos en los componentes mediante inyección de dependencias.

<----------------------------------------------------------->
 cuando tomas datos de una base de datos desde una URL, generalmente se sigue el siguiente flujo en Angular:

Servicio: Define el método para obtener los datos.
Componente: Usa el servicio para consumir los datos y mostrarlos en la vista.
Módulo: Asegura que el servicio y el componente estén registrados correctamente.
spec.ts: Archivos de pruebas unitarias para asegurar la funcionalidad correcta del servicio y del componente.
