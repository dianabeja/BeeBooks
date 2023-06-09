import React from "react";

export const BuscarLibros = () => {
  return (
    <div>
        <h2>Introduce el título del libro</h2>
        <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Harry Potter"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Buscar libro
          </button>
        </form>
      </div>
    </nav>

<h2>Librerías disponibles: </h2>

<div class="list-group">
<button type="button" class="list-group-item list-group-item-action" aria-current="true">
Librería Moderna
</button>
<button type="button" class="list-group-item list-group-item-action">Libros & Café</button>
<button type="button" class="list-group-item list-group-item-action">La Imprenta de Gutenberg</button>
<button type="button" class="list-group-item list-group-item-action">La Cuadra del Libro</button>
<button type="button" class="list-group-item list-group-item-action">Lectores Books Shop</button>
</div>
    </div>
  );
};
