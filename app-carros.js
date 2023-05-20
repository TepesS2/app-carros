//config//
const URL_API= "https://83a9b835-0120-4827-8273-eee362442443.mock.pstmn.io";
let resp = fetch(URL_API+"/veiculos/listar")
.then((resultado)=>resultado.json())
.then((resultado)=>{
console.log(resultado);});