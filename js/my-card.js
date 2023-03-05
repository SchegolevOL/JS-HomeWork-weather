
export class MyCard extends HTMLElement{
    constructor(){
        super();

    }
    connectedCallback(){
        this.innerHTML = 
    
        '<div class="card none mt-20" style="width: 18rem;">'+
            '<div class="card-body">'+
                '<h5 id="sity" class="card-title" title="sity"></h5>'+
                '<p class="card-text"></p>'+
            '</div>'+
            '<ul id="data" class="list-group list-group-flush card">'+
                '<li class="list-group-item"></li>'+
                '<li class="list-group-item"></li>'+
                '<li class="list-group-item"></li>'+
                '<li class="list-group-item"></li>'+
                '<li class="list-group-item"></li>'+
            '</ul>'+
        '</div>'
    
    }
}
