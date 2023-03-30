
const touches = [...document.querySelectorAll('.button')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran')

document.addEventListener('keydown', (cal) => {
    const valeur = cal.keyCode.toString();
    calculer (valeur)   
})

document.addEventListener('click', (cal) =>{
    const valeur = cal.target.dataset.key;
    calculer (valeur)   
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            //faire marche la touche clean
            case '8':
                ecran.textContent = "";
                break;
            //faire marcher le '='    
            case '13':
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul;
                break;
            default:
            // faire fonctionner les autres touche
            const indexKeycode = listeKeycode.indexOf(valeur);
            const touche = touches[indexKeycode]
            ecran.textContent += touche.innerHTML;


        }
    }
}
    
window.addEventListener('error', (error) => {
    alert('il y a une erreur dans votre calcul :' + error.message)
})
