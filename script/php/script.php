<?php
if (isset($_POST['nom']) &&isset($_POST['prenom']) && isset($_POST['tel']) && isset($_POST['email']) && isset($_POST['message'])){

    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $tel = $_POST['tel'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    
    if (!empty($_POST['objet'])){
        $subject= $_POST['objet'];
    } else {
        $subject = 'Lorem Ipsum';
    }

    $to = 'chauncey.billups@hotmail.fr';
    // Envoi d'email
    if(mail($to, $subject, $message)){
        echo "Votre message a été envoyé avec succès!";
    } else{
        echo "Impossible d'envoyer des emails. Veuillez réessayer.";
    }

}

?>