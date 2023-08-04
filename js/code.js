//Variables de Contenedores
const loginContenedorV = document.querySelector('#loginContenedor');
const cuentaDetalleV = document.querySelector('#cuentaDetalle');

// const loginSesionV = document.querySelector('#loginSesion');
//Variables de Contenedor LOGIN
const usrNombreV = document.querySelector('#usrNombre');
const usrPasswordV = document.querySelector('#usrPassword');
const btnIngresoV = document.querySelector('#btnIngreso');
const respuestaV = document.querySelector('#respuesta');

//Variables de Contenedor Cuenta

const usrcuentaV = document.querySelector('#usrcuenta');
const saldoNetoV = document.querySelector('#saldoNeto');
const cantDeposito = document.querySelector('#deposito');
const btnDepositoV = document.querySelector('#btnDeposito');
const respD = document.querySelector('#respDeposito');
const cantRetiro = document.querySelector('#retiro');
const btnRetiroV = document.querySelector('#btnRetiro')
const respR = document.querySelector('#respRetiro');

//Variables de Negocio
const montoMax = 990;
const montoMin = 10;



btnDepositoV.addEventListener('click', function(e){
  
  nuevoSaldo = parseInt(saldoNetoV.textContent) + parseInt(cantDeposito.value);
  if(nuevoSaldo > montoMax){
    respD.innerHTML = 'Excedes limite de Saldo';
    e.preventDefault();
  }
  else{
    respD.innerHTML = 'Dinero Depositado';
    saldoNetoV.innerHTML = nuevoSaldo;
    e.preventDefault();
  }
  cantDeposito.value = '';
  
});


btnRetiroV.addEventListener('click', function(e){
  
  nuevoSaldo = parseInt(saldoNetoV.textContent) - parseInt(cantRetiro.value);
  if(nuevoSaldo < montoMin){
    respR.innerHTML = 'Excedes limite de Retiro';
    e.preventDefault();
  }
  else{
    respR.innerHTML = 'Dinero Entregado';
    saldoNetoV.innerHTML = nuevoSaldo;
    e.preventDefault();
  }
  cantRetiro.value = '';

});





btnIngresoV.addEventListener('click', function(e){
  const usuario  = usrNombreV.value;
  const password = usrPasswordV.value;
  let bandera = 0;
  if(usuario !== '' && password !== ''){
  cuentas.forEach(cuenta => {
    if(cuenta.usuario == usuario && cuenta.password == password){
    
      cuentaDetalleV.style.display='block';
      loginContenedorV.style.display='none';
      
      usrcuentaV.textContent = cuenta.usuario;
      saldoNetoV.innerHTML = cuenta.saldo;

      respuestaV.innerHTML = usuario;
      bandera = 1;
      e.preventDefault();
    }
    else{
      if(bandera == 0){
        respuestaV.innerHTML = "Intenta de Nuevo";
        usrNombreV.value = '';
        usrPasswordV.value = '';
        e.preventDefault();
      }
    }
  })
}
});


