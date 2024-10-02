const modal = document.querySelector(".modal");
const btn_dangnhap = document.querySelector(".dangnhap");
const btn_dangky = document.querySelector(".dangky");
const modal_overlay = document.querySelector('.modal__overlay');
const register_form = document.querySelector(".register_form");
const login_form = document.querySelector(".login_form");
const auth_form__socials_back = document.querySelectorAll(".auth-form__socials-back");
if (modal || btn_dangky || btn_dangnhap) {
    btn_dangky.onclick = function () {
        modal.classList.remove("display_none");
        modal_overlay.classList.remove("display_none");
        register_form.classList.remove("display_none");
    }

    btn_dangnhap.onclick = function () {
        modal.classList.remove("display_none");
        modal_overlay.classList.remove("display_none");
        login_form.classList.remove('display_none');
    }
}
auth_form__socials_back.forEach(element => {
    if (element) {
        element.onclick = function () {
            if (register_form.classList.contains("display_none")) {
                login_form.classList.add("display_none");
                modal.classList.add("display_none");
                modal_overlay.classList.add("display_none");
            } else {
                register_form.classList.add("display_none");
                modal.classList.add("display_none");
                modal_overlay.classList.add("display_none");
            }
        }
    }

});