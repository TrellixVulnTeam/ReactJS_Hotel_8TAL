const form = document.querySelector(".form-reservation form"),
    roomsList = document.querySelector("#rooms-list");

form.onsubmit = (e) => {
    e.preventDefault();
}

function showRoomType() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/reservation.php", true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                roomsList.innerHTML = xhr.response;;
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}