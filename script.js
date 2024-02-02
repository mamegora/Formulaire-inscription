function validationFormulaire(){
    //recuperer les valeur des champs
    let nom = document.getElementById("Nom").value;
    let prenom = document.getElementById("Prenom").value;
    let email = document.getElementById("Courriel").value;
    let motDePasse = document.getElementById("Mot_de_passe").value;
    let confirmation = document.getElementById("Confirm_MDP").value;


    // Valider les champs (ajoutez vos règles de validation ici)
    if (nom === '' || prenom === '' || email === '' || motDePasse === '' || confirmation === '') {
        alert('Tous les champs doivent être remplis');
        return;
    }

    if (motDePasse !== confirmationMotDePasse) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }
    // Si la validation réussit, vous pouvez envoyer les données au serveur
        alert('Formulaire validé. Envoi au serveur...');
}