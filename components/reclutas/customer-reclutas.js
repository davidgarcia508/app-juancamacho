import { opc, postData,putData, } from "../../Api/customer-api.js";
export class CustomerReclutas extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.saveData();
    }
    render(){
        this.innerHTML=/* html */`
        <div class="card">
        <h5 class="card-header">RECLUTAS</h5>
        <div class="card-body">
            <div class="container">
                <div class="row g-3">
                    <div class="col-12">
                        <form id = "frmData">
                            <div class="row g-3">
                                <div class="col-3">
                                    <label for="id" class="form-label">id</label>
                                    <input type="text" class="form-control" id="id" name="id">                  
                                </div>
                                <div class="col-3">
                                    <label for="nombre" class="form-label">nombre</label>
                                    <input type="text" class="form-control" id="nombre" name="nombre">
                                </div>
                                <div class="col-3">
                                    <label for="edad" class="form-label">edad</label>
                                    <input type="text" class="form-control" id="edad" name="edad">                  
                                </div>
                                <div class="col-3">
                                    <label for="telefono" class="form-label">telefono</label>
                                    <input type="text" class="form-control" id="telefono" name="telefono">                  
                                </div>
                            
                                <div class="col-4">
                                    <label for="email" class="form-label">Email cliente</label>
                                    <input type="email" class="form-control" id="email" name="email">
                                </div>
                                <div class="col-4">
                                    <label for="direccion" class="form-label">direccion</label>
                                    <input type="text" class="form-control" id="direccion" name="direccion">                  
                                </div>
                                <div class="col-4">
                                    <label for="fechanac" class="form-label">Fecha Nacimiento</label>
                                    <input type="date" class="form-control" id="fechanac" name="fechanac">                  
                                </div>
                                <div class="col-4">
                                    <label for="fechaIngreProgram" class="form-label">fecha de ingreso al programa</label>
                                    <input type="date" class="form-control" id="fechaIngreProgram" name="fechaIngreProgram">                  
                                </div>
                                <div class="col-4">
                                    <label for="idTeam" class="form-label">id del team</label>
                                    <input type="text" class="form-control" id="idTeam" name="idTeam">                  
                                </div>
                                <div class="container mt-4 text-center" >
                                <button type="submit" data-accion="POST" class="btn btn-primary">Guardar</button>

                            </div>
                        </div>
                             
                        </form>                         
                </div>
            </div>
        </div>
        </div>
    </div>       
        `
    }
    saveData = () =>{
        let myForm = document.querySelector("#frmData");
        myForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            opc[e.submitter.dataset.accion](data)
        })
    }
}
customElements.define("customer-reclutas",CustomerReclutas);