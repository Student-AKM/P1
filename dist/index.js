function toggleHide(){
    let btn = document.querySelector("#fbtn");
    let menu = document.querySelector("#menu");
    if( menu.style.display != 'none'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'grid';
    }

}