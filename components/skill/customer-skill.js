import { opc, postData,putData, } from "../../Api/customer-api.js";
export class CustomerSkill extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.saveData();
    }
    render(){
        this.innerHTML=/* html */`
        <div class="card">
        <h5 class="card-header">SKILL</h5>
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
                            </div>
                            <div class="row g-3">
                                <div class="container mt-4 text-center" >
                                    <input type="submit" data-accion="POST" class="btn btn-primary" value="Guardar ">
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
customElements.define("customer-skill",CustomerSkill);