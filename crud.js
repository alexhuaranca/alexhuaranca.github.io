/*create almacena*/

function create(arr, obj, i, e1, e2, e3){
    e1 = parseFloat(e1);
    e2 = parseFloat(e2);
    e3 = parseFloat(e3);
    let r = new obj(e1,e2,e3);
    arr[i]=r;
    document.querySelector('.texto').value=cmds[0];
}

function read(array, opcion, cont, comp1, comp2 ){
    switch(opcion){
        case 'no':
            for (let i = 0; i < cont; i++) {
                if (array[i].no === comp1) {
                    pos = i;
                }
            }
        break;
        case 'nodi':
            for (let i = 0; i < cont; i++) {
                if (array[i].no === comp1) {
                    if (array[i].di === comp2) {
                        pos = i;
                    }
                }
            }
        break;
        default:
    }
}

function update(array, opcion, cont){ 
    switch(opcion){
        case 'no':
            for (let i = 0; i < cont; i++) {
                if (array[i].no === parseFloat(cmds[2])) {
                    pos = i;
                }
            }
        break;
        case 'nodi':
            for (let i = 0; i < cont; i++) {
                if (array[i].no === parseFloat(cmds[2])) {
                    if (array[i].di === parseFloat(cmds[3])) {
                        pos = i;
                    }
                }
            }
        break;
        default:
    }    
}

function erase(array, opcion, cont){
    switch(opcion){
        case 'no':
            for (let i = 0; i < cont; i++) {
                if (array[i].no === parseFloat(cmds[2])) {
                    pos = i;
                }
            }
        break;
        case 'nodi':
            for (let i = 0; i < cont; i++) {
                if (array[i].no === parseFloat(cmds[2])) {                   
                    if (array[i].di === parseFloat(cmds[3])) {                        
                        pos = i;                                                              
                    }                                              
                }
            }        
        break;
        default:
    }
    delete array[pos];
}
