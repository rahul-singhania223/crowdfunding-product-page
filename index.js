let open_btn = document.getElementById('open');
let close_btn = document.getElementById('close');
let mobile_modal = document.getElementById('mobile_menu');
let bookmark_btn = document.getElementsByClassName('button_2')[0];
let screen_width = window.innerWidth;
let action_btns = document.getElementsByClassName('action__button');
let modal_completed = document.getElementById("modal__completed");
let modal_completed_close_btn = document.getElementById("modal_completed_close");
let closed_action_btn = document.getElementsByClassName('action__btn__closed')[0];

let open_modal = false;
let bookmarked = false;

open_btn.addEventListener("click", () => {
    open_modal = true;

    if(open_modal){
        mobile_modal.style.display = "block";
        open_btn.style.display = "none";
    }

    console.log('clicked');
})

close_btn.addEventListener('click', () => {
    open_modal = false;


    if(!open_modal){
        mobile_modal.style.display = "none";
        open_btn.style.display = "block";
    }
})

bookmark_btn.addEventListener('click', (e) => {

    bookmarked = !bookmarked;


    if(bookmarked) {
        bookmark_btn.classList.add('bookmarked');
        bookmark_btn.lastElementChild.innerHTML = "Bookmarked";
        
    } else {
        bookmark_btn.classList.remove('bookmarked');
        bookmark_btn.lastElementChild.innerHTML = "Bookmark";
    }
    
})

// ---------Handle modal__completed--------

const action_btn_task = () => {
    modal_completed.style.display = "grid";    
}

action_btns[0].addEventListener("click", () => action_btn_task());
action_btns[1].addEventListener("click", () => action_btn_task());
action_btns[2].addEventListener("click", () => action_btn_task());

modal_completed_close_btn.addEventListener("click", () => {
    modal_completed.style.display = "none";    
})


// -----------Changes when out of stock----------//
closed_action_btn.innerHTML = "Out of stock";