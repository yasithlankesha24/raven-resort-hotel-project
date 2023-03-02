function validate(){
    function checkvalues(){
        let flag = true;
        let first =document.getElementById("first");
        let last =document.getElementById("last");
        let email=document.getElementById("email");
        let subject=document.getElementById("subject")
        let details=document.getElementById("details");

        if(first.value ==='' || first.value==null){
            alert("First name cannot be empty")
            flag=false;
        }
        

        if(last.value ==='' || last.value==null){
            alert("Last name cannot be empty")
            flag=false;
        }
        
        if (email.value ==='' ||  email.value==null){
            alert("Email cannot be empty")
            flag=false;
        }

        if (contact.value ==='' ||  contact.value==null){
            alert("Contact No. cannot be empty")
            flag=false;
        }

    
        if (details.value ==='' || details.value == null){
            alert ("Details field cannot be empty")
            flag=false;
        }

        _first = first.value;
        _last = last.value;
        _email = email.value;
        _contact = contact.value;
        _details = details.value;
        _subject=subject.value;
        return flag;
    }
    if (checkvalues() === true){
        document.getElementById("container").style.display="none";
        document.getElementById("demo").style.display = "block";
        document.getElementById("demo1").innerHTML ="First Name: " + _first;
        document.getElementById("demo2").innerHTML ="Last Name: " + _last;
        document.getElementById("demo3").innerHTML ="Email:"+_email;
        document.getElementById("demo4").innerHTML ="Contact:"+_contact;
        document.getElementById("demo5").innerHTML ="Subject: " + _subject;
        document.getElementById("demo6").innerHTML ="Details: " + _details;
    }

}