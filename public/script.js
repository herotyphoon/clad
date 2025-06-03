function toggleMenu(x) {
    x.classList.toggle("change");
    document.getElementById("sidebar").classList.toggle("active");
}

function toggleLogin() {
    document.getElementById('chk').checked = true;
    return false;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const successMessage = document.getElementById("successMessage");
    src="/socket.io/socket.io.js"

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            form.style.display = "none";
            successMessage.style.display = "block";
        });
    }
});

