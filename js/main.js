document.addEventListener("DOMContentLoaded", function () {
    fetch("html/productos.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el contenido");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("productos-container").innerHTML = data;
        })
        .catch(error => {
            console.error("Error al cargar productos:", error);
        });
        
});


