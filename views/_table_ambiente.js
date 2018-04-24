var ambiente_array_json_th = [
	{titulo:"id", index: "_id", estilos:"width: 10px; display:none;"},
  {titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 60px; padding-left: 0px;"}
];

var ambiente_array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"_id", edicion:""},
  {tipo:"label",estilos:"width:200px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var ambiente_array_json_btn_td = [
  {clase:"fa fa-pencil", href:"#/ambiente/editar/", alt:"Editar Ambiente",estilos:"padding-left: 5px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-search", href:"#/ambiente/ver/", alt:"Ver Ambiente",estilos:"padding-left: 5px;", tipo:"btn_td_href", operacion:"IrURL"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar Ambiente",estilos:"padding-left: 10px;", operacion:"QuitarFila"},
];

var ambiente_array_json_btn = [
	{tipo: "agrega_fila_link", link:"#/ambiente/crear", operacion:"AccionURL", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];
