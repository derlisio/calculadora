let form = document.getElementById('calculadora');


const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const VD = document.getElementById('vd');
let vd1,vd2;


CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value //lo que se ingresa en el input se guarda en el id='peso', y luego el valor se le designa a la variable DATO.
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        if (DATO>30) {
            
            let sc= ((DATO * 4) + 7)/(DATO+90);
            let vd1=sc*1500;
            let vd2=sc*2000
            //let vd= DATO + 90;
            //let vd=sc*1500;
            VD.innerHTML = 'Volumen diario 1: '+Math.round(vd1)+ 'cc<br>'+ 'Volumen diario 2: '+Math.round(vd2)+'cc';
        }
        else{
            let vd= flujo*24;
            VD.innerHTML = 'Volumen diario: '+ vd+'cc';
        }
        
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        VD.style.display='block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        VD.style.display='none';
    }
})

function calcFlujo(peso){
    
    let resto = peso;
 
    let flujo = 0;
        if (resto>20){
            let aux = resto-20;
            flujo += aux*1;
            resto -= aux;
        } 
        if (resto>10){
            let aux = resto-10;
            flujo += aux*2;
            resto -= aux;
        }
        
        flujo += resto*4;
        
        return flujo;
    
  
}


