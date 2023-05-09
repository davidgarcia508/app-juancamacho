import { getDataAll } from "../../Api/customer-api.js";
export class CustomerListas extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.requestApiGetCliente();
    }
    render(){
        this.innerHTML=/* html */`
        <table class="table table-striped">
        <div class="container">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>edad</th>
                    <th>telefono</th>
                    <th>email</th>
                    <th>direccion</th>
                </tr>
            </thead>
            <tbody>
               <tr>
                <td>sss</td>
                <td>sss</td>
                <td>sss</td>
                <td>sss</td>
                <td>sss</td>
                <td>sss</td>
                <td>
                    <button type="button" class="btn btn-success">+</button>
                    <button type="button" class="btn btn-danger">-</button>

                </td>
               </tr>
            </tbody>
                      
        </div>
    </table>
        ` 
    }
    requestApiGetDatos = () =>{
        getDataAll()
        .then((result)=>{
            this.renderDatos(result)
        })
    }
    renderDatos = (usuario)=>{
        let usuarioHTML = '';
        for(let usuario of usuario){
            usuarioHTML += thiscrearListaDatosHTML(usuario);
        }
        document.getElementById('lista-usuario').innerHTML = usuarioHTML;
    }
    thiscrearListaDatosHTML = (usuario)=>{
        let listaHTMl = /* html */ `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.email}</td>
            <td>${usuario.direccion}</td>
            <td>
                   <button type="button" class="btn btn-success">+</button>
                    <button type="button" class="btn btn-danger">-</button>
            </td>
        </tr>
        ` 
    }
}
customElements.define("customer-listas",CustomerListas);