const entre = document.querySelector(".entre");

const btn = document.querySelectorAll(".conteneur_btn div");

let liste_operation = [];


btn.forEach(function (bouton) {

    bouton.addEventListener("click", function () {

        if (bouton.innerHTML == "=") {

            try {
                entre.innerHTML = eval(liste_operation.toString().replaceAll(",", " "));
                liste_operation = [];
            } catch (error) {
                console.log("operation incomplete");

            }



            /* gestion de la division par zero*/

            if (entre.innerHTML == "Infinity") {

                const p_e = document.createElement("p");
                p_e.innerHTML = "Erreur";
                entre.innerHTML = p_e.innerHTML;

            }




        }
        else if(bouton.innerHTML == "C"){

            let i = 0;
            
            liste_operation.forEach( function(element){

                delete liste_operation[i];
                i++;

                

                entre.innerHTML = liste_operation.toString().replaceAll(",", " ");
                
            })
           
            
            
        }
        else {

            liste_operation.push(bouton.innerHTML);
            entre.innerHTML = liste_operation.toString().replaceAll(",", " ");

        }

    })

})





