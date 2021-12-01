// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else {
           
            
            registraradministrador()
            event.preventDefault()
            
            
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()
  function registrarsolicitud(){
    //alert('Please')
    let fecha1= document.querySelector("#txtFecha").value;
    let fechaformato= new Date(fecha1)
    let fecha = fechaformato.toJSON();
    
    let estado=0;
    let valornum = document.querySelector("#txtPrecio").value;
    let valor=parseInt(valornum,10)
    let tipo = document.querySelector("#txtTipo").value;
    let cliente= document.querySelector("#txtClientes").value;
    let vehiculo= document.querySelector("#txtVehiculo").value;
    
    let asesor=document.querySelector("#txtAsesor").value;
    
    let url=`http://127.0.0.1:3000/solicituds`
    let datos={
      fecha:fecha,
      estado:estado,
      valor:valor,
      tipo:tipo,
      clienteId:cliente,
      vehiculoId:vehiculo,
      asesorId:asesor
    };
    console.log(datos);
    fetch(url,{
      method:'POST',
      body:JSON.stringify(datos),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
    .then(mensaje=>{
      console.log(mensaje)
    })
  }
  function registraradministrador(){
    //alert('feo')
    let nombre = document.querySelector("#nombre").value;
    let documento= document.querySelector("#documento").value;
    let email= document.querySelector("#email").value;
    let telefono= document.querySelector("#telefono").value;
    
    let url=`http://127.0.0.1:3000/administradors`
    let datos={
      nombre:nombre,
      documento:documento,
      email:email,
      telefono:telefono,
      
    };
    console.log(datos);
    fetch(url,{
      method:'POST',
      body:JSON.stringify(datos),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
    .then(mensaje=>{
      console.log(mensaje)
    })
  }