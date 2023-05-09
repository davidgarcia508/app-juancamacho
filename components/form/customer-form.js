
export class CustomerFrom extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/* html */`
        <ul class="nav nav-tabs ">
        <li class="nav-item">
            <a class="nav-link tabOpcion" href="reclutas.html" id="reclutas">reclutas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link tabOpcion" href="team.html" id="team">team</a>
        </li>
        <li class="nav-item">
            <a class="nav-link tabOpcion" href="skill.html" id="skill">skill</a>
        </li>
        <li class="nav-item">
            <a class="nav-link tabOpcion" href="moduleskill.html" id="module">modul skill</a>
        </li>
      </ul>
        `
    }
}
customElements.define("customer-form",CustomerFrom);