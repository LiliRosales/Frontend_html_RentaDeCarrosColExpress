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
           
            
            registrarcliente()
            event.preventDefault()
            
            
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()
 
  function registrarcliente(){
    //alert('feo')
    let nombre = document.querySelector("#nombre").value;
    let documento= document.querySelector("#documento").value;
    let email= document.querySelector("#email").value;
    let telefono= document.querySelector("#telefono").value;
    
    let url=`http://127.0.0.1:3000/clientes`
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