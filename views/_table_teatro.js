var teatro_array_json_th = [
	{titulo:"id", index: "_id", estilos:"width: 10px; display:none;"},
  {titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 60px; padding-left: 0px;"}
];

var teatro_array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"_id", edicion:""},
  {tipo:"label",estilos:"width:200px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var teatro_array_json_btn_td = [
  {clase:"fa fa-pencil", href:"#/teatro/editar/", alt:"Editar Teatro",estilos:"padding-left: 5px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-search", href:"#/teatro/ver/", alt:"Ver Teatro",estilos:"padding-left: 5px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar Teatro",estilos:"padding-left: 10px;", operacion:"QuitarFila"},
];

var teatro_array_json_btn = [
  {tipo: "agrega_fila_link", link:"#/teatro/crear", operacion:"AccionURL", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];
