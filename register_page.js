function  validation(){

    const name = document.getElementById("nm1");
    const email = document.getElementById("em1");
    const password = document.getElementById("pas1");
    const cpassword = document.getElementById("pas2");
    const show = document.getElementById("checking");

        
        
    show.addEventListener("change",()=>{
        if(show.checked){
            password.type = "text";
            cpassword.type = "text";
        }else{
            password.type = "password";  
            cpassword.type = "password";
        }
    })
       
        if(name.value==""){
            document.getElementById("p1").innerHTML = "please enter name";
            document.getElementById("p1").style.color = "red"; 
        }
       
        else{
            document.getElementById("p1").innerHTML = "succses";
            document.getElementById("p1").style.color = "green";
                      
        }

        if(email.value==""){
            document.getElementById("p2").innerHTML = "please enter email";
            document.getElementById("p2").style.color = "red";
                     
        }
        else{
            document.getElementById("p2").innerHTML = "succses";
            document.getElementById("p2").style.color = "green";
                      
        }

        if(password.value==""){
            document.getElementById("p3").innerHTML = "please enter password";
            document.getElementById("p3").style.color = "red";
                      
        }
        else{
            document.getElementById("p3").innerHTML = "succses";
            document.getElementById("p3").style.color = "green";
                      
        }
        
        if(cpassword.value==""){
            document.getElementById("p4").innerHTML = "please enter confirm password";
            document.getElementById("p4").style.color = "red";
            return false;
        }
        

        if(password.value!==cpassword.value){
            document.getElementById("p4").innerHTML = "password dose not match";
            document.getElementById("p4").style.color = "red"
            return false;
            
        }else{
            document.getElementById("p4").innerHTML = "password match";
            document.getElementById("p4").style.color = "green"
        }

    }