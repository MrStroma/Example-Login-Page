$(document).ready(function() {
    // Selezione form e definizione dei metodi di validazione
    $("#form").validate({
        // Definiamo le nostre regole di validazione
        rules : {
            // login - nome del campo di input da validare
            login : {
              // Definiamo il campo login come obbligatorio
              required : true
            },
            email : {
                required : true,
                // Definiamo il campo email come un campo di tipo email
                email : true
            },
            password : {
                required : true,
                // Settiamo la lunghezza minima e massima per il campo password
                minlength : 5,
                maxlength : 8
            }
        },
        // Personalizzo i mesasggi di errore
        messages: {
            login: "Inserisci la login",
            password: {
                required: "Inserisci una password",
                minlength: "La password deve essere lunga minimo 5 caratteri",
                maxlength: "La password deve essere lunga al massimo 8 caratteri"
            },
            email: "Inserisci la tua email"
        },
        // Settiamo il submit handler per la form
        submitHandler: function(form) {
            form.submit();
        }
    });
});