document.addEventListener('DOMContentLoaded', function() { //Ejecuta el js una ves que cargo todo el DOM
    const  title = document.getElementById('title');
    const  description = document.getElementById('description');
    const  table = document.getElementById('table');
    const  alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id = 1

    //Funcion para revomer un elemento de la tabla
    function removeTodo(id){
        document.getElementById(id).remove();

    }

    //Funcion para añadir un alemento a la tabla
    function addTodo() {
        //Comprobando que el form no este vacio
        if (title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'El titulo y la descripcion son obligatorios | Title and description are required'
            return;
        }
        //Insertando el nuevo elemento en la tabla
        alert.classList.add('d-none');
        const row = table.insertRow();
        //Asignando un id a cada elemento
        row.setAttribute('id', id++)
        row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
        </td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        //Creando el boton de eliminar para casa elemento en la tabla
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = function (e){
            removeTodo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removeBtn);
    }

    //Ejecutando al dar click en el boton buscar
    btn.onclick = addTodo;
});



