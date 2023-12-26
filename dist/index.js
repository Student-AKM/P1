function toggleHide(){
    let btn = document.querySelector("#fbtn");
    let menu = document.querySelector("#menu");
    if( menu.style.display != 'none'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'grid';
    }

}



let title = document.getElementById("title");
let user = document.getElementById("user");

// console.log((title),(user));

let prof = {
    User: {
        userName:{
            firstName: "Hitesh",
            lastName: "Chaudhary"
        },
        occup: "JS Developer",
    }

}

// console.log(prof.User.occup);


title.innerHTML = prof.User.occup;

let FirstName = prof.User.userName.firstName;
let LastName = prof.User.userName.lastName;

console.log(`${FirstName} ${""}${LastName}`);
let FullName = `${FirstName} ${""}${LastName}`;
user.innerHTML = `${FirstName} ${""}${LastName}`;