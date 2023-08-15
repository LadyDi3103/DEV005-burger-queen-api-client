<p>
  <h1 style = 'text-align:center'>Burger Queen (API Client)</h1>
</p>

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Historias de usuario](#5-historias-de-usuario)
* [5. Despliegue](#6-despliegue)
* [6. Pistas / tips](#7-pistas--tips)

## 1. Preámbulo

[Angular](https://angular.io/) es uno de los _frameworks_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc.

Como desarrolladoras Front-end, estos kits de desarrollo nos resultan
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajamos.

## 2. Resumen del proyecto

BurgerApp es un sistema de pedidos diseñado para satisfacer las necesidades del cliente, ofreciendo una experiencia culinaria más rápida y satisfactoria.

![burger-queen-mockup](https://github.com/LadyDi3103/DEV005-burger-queen-api-client/blob/main/Burger-Queen-Api-Client/src/assets/img/mockup%20proyecto.png?raw=true)


<table>
  <tr>
    <td style = 'width :70%'>
      <img src="https://github.com/LadyDi3103/DEV005-burger-queen-api-client/blob/main/Burger-Queen-Api-Client/src/assets/img/waiter.png?raw=true" alt="Descripción de la imagen">
    </td>
    <td style = 'width :30%'>
      La interfaz muestra de manera clara y organizada los dos menús disponibles: Breakfast y Meals, con todos sus productos. Los meseros/as pueden ir seleccionando los productos que desean agregar al pedido de los comensales, y la interfaz irá mostrando un resumen detallado del pedido, así como realizar modificaciones o cancelaciones en caso de que el cliente cambie de opinión. Una vez que el pedido esté completo, se enviará automáticamente a la cocina para su preparación.
    </td>
  </tr>
</table>

<table>
  <tr>
    <td style = 'width :50%'>
      El equipo de cocina se beneficia significativamente de BurgerApp, ya que reciben los pedidos en tiempo real, lo que les permite comenzar a preparar las hamburguesas de inmediato. Esto ha optimizado los tiempos de preparación y ha agilizado la entrega de los pedidos a los clientes, garantizando una experiencia culinaria más rápida y satisfactoria.
    </td>
    <td style = 'width :50%'>
          <img src="https://github.com/LadyDi3103/DEV005-burger-queen-api-client/blob/main/Burger-Queen-Api-Client/src/assets/img/chef.png?raw=true" alt="burger-queen-mockup-chef">
    </td>
  </tr>
</table>

Además, el sistema cuenta con una funcionalidad de administrador que permite la modificación, administración y eliminación de productos y usuarios, lo que facilita la gestión y actualización de la plataforma.

![burger-queen-mocku-admin1](https://github.com/LadyDi3103/DEV005-burger-queen-api-client/blob/main/Burger-Queen-Api-Client/src/assets/img/admin1.png?raw=true)![burger-queen-mocku-admin2](https://github.com/LadyDi3103/DEV005-burger-queen-api-client/blob/main/Burger-Queen-Api-Client/src/assets/img/admin2.png?raw=true)

En resumen, BurgerApp es un proyecto innovador que combina una interfaz amigable y funcional para los meseros, chefs y administradores, con una API eficiente para optimizar los procesos de cocina y entrega de pedidos. Ofrece una solución integral para el restaurante, mejorando la experiencia del cliente y aumentando la eficiencia operativa del restaurant.

foto

## 3. Objetivos de aprendizaje

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**
- [ ] **Modelo de caja (box model): borde, margen, padding**
- [ ] **Uso de flexbox en CSS**
- [ ] **Uso de CSS Grid Layout**
- [ ] **Uso de media queries**

### JAVASCRIPT

- [ ] **Pruebas unitarias (unit tests)**
- [ ] **Pruebas asíncronas**
- [ ] **Uso de mocks y espías**
- [ ] **Módulos de ECMAScript (ES Modules)**
- [ ] **Uso de linter (ESLINT)**
- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**
- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ] **GitHub: Despliegue con GitHub Pages**
- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**
- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**
- [ ] **Cabeceras (headers)**
- [ ] **Cuerpo (body)**
- [ ] **Verbos HTTP**
- [ ] **Códigos de status de HTTP**
- [ ] **Encodings y JSON**
- [ ] **CORS (Cross-Origin Resource Sharing)**

### Angular

- [ ] **Components & templates**
- [ ] **Directivas estructurales (ngIf / ngFor)**
- [ ] **@Input | @Output**
- [ ] **Creación y uso de servicios**
- [ ] **Manejo de rutas**
- [ ] **Creación y uso de Observables.**
- [ ] **Uso de HttpClient**
- [ ] **Estilos de componentes (ngStyle / ngClass)**

### Bases de datos

- [ ] **Modelado de datos**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**
- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

## 4. Historias de Usuario

![burger-queen-users-history](https://github.com/LadyDi3103/DEV005-burger-queen-api-client/blob/main/Burger-Queen-Api-Client/src/assets/img/Infograf%C3%ADa%20de%20L%C3%ADnea%20de%20Tiempo%20Timeline%20con%20Fechas%20Profesional%20Moderno%20Multicolor.png?raw=true)

## 5. Despliegue

## 6. Pistas / tips
