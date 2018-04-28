var teatro_equipo_array_json_th = [
	{titulo:"id", index: "_id", estilos:"width: 10px; display:none;"},
  {titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 80px; padding-left: 10px;"}
];

var teatro_equipo_array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"_id", edicion:""},
  {tipo:"text",estilos:"width:200px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var teatro_equipo_array_json_btn_td = [
  {clase:"fa fa-times",url:"",alt:"Eliminar asociación",estilos:"padding-left: 25px;", operacion:"QuitarFila"},
];

var teatro_equipo_array_json_btn = [
  {tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];


var teatro_equipo_array_json_btn_td_ver = [
  {clase:"fa fa-search",url:"",alt:"Ver archivo",estilos:"padding-left: 25px;display:none", operacion:"VerArchivoTab", 'td_archivo_id': 2, 'url': BASE_URL + 'ambiente/galeria/obtener_ruta_foto/'},
];

var teatro_equipo_array_json_btn_ver = [];
