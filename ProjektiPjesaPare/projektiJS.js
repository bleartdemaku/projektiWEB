/*const user = "bleart";
            const pass = "ubt12345";*/
  
  var usernameElement = document.getElementById('usernameID').value;
  var usernameElement1 = document.querySelector('.link-container>a');//kthen elementin epare
  var usernameElement2 = document.querySelectorAll('.link-container>a');//kthen te gjitha elementet
  
  var usernameElement1 = document.getElementsByTagName('div');
  var usernameElement1 = document.getElementsByName('nameSpecific');
      
            function validate(number){
                var inputList = document.getElementsByClassName('input');
                
                if(number == 0){
                    //jemi te login
                    var usernameValue = inputList[0].value;
                    var passwordValue = inputList[1].value;
                    
                   /*if(usernameValue == user && passwordValue == pass){
                        alert("login success");
                    }*/
                    if(usernameValue ===''){
                      alert("Username duhet te plotesohet");
                    }
                    else if(usernameValue.length > 30){
                      alert("Username duhet te kete me pak se 30 karaktera");
                   }
                   else if(passwordValue ===''){
                       alert("Password incorrect")
                   }
                   else{
                       alert("Login succsessful");
                       window.open('MainFaqja.html');
                   }
  
                }
  
                else if(number == 1){
                    var nameValue = inputList[2].value;
                    var lastnameValue = inputList[3].value;
                    var passwordValue = inputList[4].value;
  
                    if(nameValue ==='' ){
                        alert('Plotesoni emrin');
                    }
                    else if(nameValue.length>20){
                        alert("Emri duhet te jete me pak se 20 karaktera");
                    }
                    else if(lastnameValue ===''){
                        alert('Plotesoni Mbiemrin');
                    }
                    else if(lastnameValue.length>20){
                      alert("Emri duhet te jete me pak se 20 karaktera");
                    }
                    else if(passwordValue ===''){
                        alert('plotesoni passwordin');
                    }
                    else if(passwordValue.length>20){
                        alert('Passwordi nuk mundet te jete me i gjate se 20 karaktera');
                    }
                    else{
                        alert("Register succsessful");
                        window.open('MainFaqja.html');
                    }
                  }
              }
        
          function changeForm(number){
              var divList = document.getElementsByClassName('forms');
              if(number == 0){
                  divList[0].classList.remove("hidden");
                  divList[0].classList.add('form-style');
      
                  divList[1].classList.add("hidden");
                  divList[1].classList.remove('form-style');
              }
              else if(number == 1){
                  divList[1].classList.remove("hidden");
                  divList[1].classList.add('form-style');
      
                  divList[0].classList.add("hidden");
                  divList[0].classList.remove('form-style');
              }
          }
