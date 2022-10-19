class Gin {
    constructor(id, marca, origen, precio, stock) {
      this.id = id;
      this.marca = marca;
      this.origen = origen;
      this.precio = precio;
      this.stock = stock;
    }
  }
  


  const Gin0 = new Gin(0, "El Nombre maldito", "Cordoba", 300, 80);
  const Gin1 = new Gin(1, "Cat Sith", "Bs As", 200, 5);
  const Gin2 = new Gin(2, "Malaria", "Mar del Plata", 1000, 40);
  const Gin3 = new Gin(3, "Mala Saña", "Tucuman", 650, 60);
  const Gin4 = new Gin(4, "Nordico", "Cordoba", 390, 78);

  
  const misGins = [Gin0, Gin1, Gin2, Gin3, Gin4];

  
  let aviso = "Productos disponibles, seleccione el numero que desea: \n";
  for (Gin of misGins) {
    aviso += `${Gin.id} - ${Gin.marca} ${Gin.origen}  precio de $ ${Gin.precio} \n`;
  }
  let eleccion = parseInt(prompt(aviso));
  
  const ginElegido = misGins.find(
    (gin) => gin.id === eleccion
  );
  
  
  if (eleccion = ginElegido) {
    alert(`el GIN selecionado de la marca ${ginElegido.marca} de origen ${ginElegido.origen} y un precio de $ ${ginElegido.precio} fue agregado al carrito!`);
  } else
  {
    alert(
      "Error!, el dato ingresado no corresponde a un id de los Gins anteriormente mostrados"
    );
  }