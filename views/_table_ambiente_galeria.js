var ambiente_galeria_array_json_th = [
	{titulo:"id", index: "_id", estilos:"width: 10px; display:none;"},
  {titulo:"Nombre",index:"nombre",estilos:"width: 400px;"},
  {titulo:"ImagenId",index:"imagen_id",estilos:"display:none"},
	{titulo:"Botones",index:"NA",estilos:"width: 80px; padding-left: 10px;"}
];

var ambiente_galeria_array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"_id", edicion:""},
  {tipo:"text",estilos:"width:400px;", index:"nombre", edicion:""},
  {tipo:"label_id",estilos:"color: blue; display:none", index:"imagen_id", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var ambiente_galeria_array_json_btn_td = [
  {clase:"fa fa-picture-o",url:"",alt:"Seleccionar archivo",estilos:"padding-left: 5px;", operacion:"SeleccionarArchivoFila"},
  {clase:"fa fa-cloud-upload",url:"",alt:"Subir archivo",estilos:"padding-left: 5px;", operacion:"SubirArchivoFila", url: BASE_URL + "archivo/subir", validacion: {'extensiones':["image/jpeg", "image/jpg", "image/png"], 'tamanio': 4070000}, 'td_archivo_id': 2},
  {clase:"fa fa-search",url:"",alt:"Ver archivo",estilos:"padding-left: 5px;", operacion:"VerArchivoTab", 'td_archivo_id': 2, 'url': BASE_URL + 'ambiente/galeria/obtener_ruta_foto/'},
  {clase:"fa fa-times",url:"",alt:"Eliminar asociación",estilos:"padding-left: 5px;", operacion:"QuitarFila"},
];

var ambiente_galeria_array_json_btn = [
  {tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];
