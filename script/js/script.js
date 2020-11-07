function form_mail() {

    var nom = document.getElementById('Nom').value;
    var prenom = document.getElementById('Prenom').value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("Email").value;
    var objet = document.getElementById("objet").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest;
    var URL = "./script/php/script.php";
    var params = "nom=" + nom + "&prenom=" + prenom + "&tel=" + tel + "&email=" + email + "&objet=" + objet + "&message=" + message;
    xhr.open('POST', URL, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        }
    };
    xhr.send(params);

}