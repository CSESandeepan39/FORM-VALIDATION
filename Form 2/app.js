var firstname = document.getElementById("firstname"),
lastname = document.getElementById("lastname"),
email = document.getElementById("Email"),
branch = document.getElementById("Branch")
phone = document.getElementById("Phonenumber"),
regd = document.getElementById("Registraion"),
dob = document.getElementById("DOB"),
domain = document.getElementById("Domain"),
social1 = document.getElementById("Social1"),
social2 = document.getElementById("Social2"),
social3 = document.getElementById("Social3"), 
submit = document.getElementById("sub");

 
const  validation = ()=>{
	if(firstname.value=='' || lastname.value=='' || regd.value=='' || email.value=='' || branch.value=='' || phone.value=='' ||   domain.value=='' || dob.value=='' || social1.value=='' || social2.value=='' || social3.value==''  ){
	    alert("All the fields should be filled.");
	    return false;
	}else if(phone.value.length!=10){
	    alert("Enter 10 digit phone number.");
	    return false;
	}
	return true;
}

var choice = localStorage.getItem("Submit") 

if (choice==0){
	console.log("choice");
	firstname.value = localStorage.getItem("Full");
	lastname.value = localStorage.getItem("last")    
	email.value = localStorage.getItem("Email"); 
	phone.value = localStorage.getItem("Phone");
    branch.value = localStorage.getItem("Branch");
	regd.value = localStorage.getItem("Regd");
	domain.value = localStorage.getItem("Domain");
	dob.value = localStorage.getItem("DOB");
	social1.value = localStorage.getItem("Git");
	social2.value =localStorage.getItem("Linkedin");
	social3.value = localStorage.getItem("Twitter");
	
}
     
document.addEventListener('change',()=>{
	localStorage.setItem("Full",firstname.value);
	localStorage.setItem("last",lastname.value);
	localStorage.setItem("Email",email.value);
	localStorage.setItem("Phone",phone.value);
	localStorage.setItem("Regd",regd.value);
	localStorage.setItem("Branch",branch.value);
	localStorage.setItem("Domain",domain.value);
	localStorage.setItem("DOB",dob.value);
	localStorage.setItem("Git",social1.value);
	localStorage.setItem("Linkedin",social2.value);
	localStorage.setItem("Twitter",social3.value);
	 
	localStorage.setItem("Submit",0);
    }) 
    
submit.addEventListener('click',()=>{
	if(validation()){
	    localStorage.setItem("Submit",1);
		window.location.reload();	  
		       
	}
	
}); 
     