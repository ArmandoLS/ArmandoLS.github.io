function searchTable() {
    // Obtiene el valor del input de búsqueda
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase();
    var table = document.getElementById("interactiveTable");
    var tr = table.getElementsByTagName("tr");

    // Recorre todas las filas de la tabla, excepto la cabecera
    for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");
        var found = false;

        // Recorre todas las celdas de la fila actual
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }

        // Muestra u oculta la fila según si encontró coincidencias
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
