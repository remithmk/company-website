function regalert(){
    if(document.register.fname.value==""){
        alert("type first name")
        return false
    }else{
        var input1=document.register.fname.value
        var pattern=/^([A-z\s\.])+$/
        var check1=(pattern.test(input1))
        if(check1==false){
            alert("enter a valid first name")
            return false
        }
    }

    
    if(document.register.mname.value==""){
        alert("enter middle name")
        return false
    }else{
        var input2=document.register.mname.value
        var pattern2=/^[A-z\s\.]+$/
        var check2=(pattern2.test(input2))
        if(check2==false){
            alert("enter a valid middle name")
            return false
        }
    }



    if(document.register.lname.value==""){
        alert("enter last name")
        return false
    }else{
        var input3=document.register.lname.value
        var pattern3=/^[A-z\s\.]+$/
        var check3=(pattern3.test(input3))
        if(check3==false){
            alert("enter a valid last name")
            return false
        }
    }


  
    if(document.register.address.value==""){
        alert("enter your address")
        return false
    }else{
        var input4=document.register.address.value
        var pattern4=/^([A-z 0-9])+$/
        var check4=(pattern4.test(input4))
        if(check4==false){
            alert("enter valid address")
            return false
        }
    }



    if(document.register.email.value==""){
        alert("enter your email")
        return false
    }else{
        var input5=document.register.email.value
        var pattern5=/^([A-z 0-9 \.\@])+$/
        var check5=(pattern5.test(input5))
        if(check5==false){
            alert("enter in mail")
            return false
        }
    }


    if(document.register.phone1.value==""){
        alert("enter your phone number")
        return false
    }else{
        var input6=document.register.phone1.value
        var pattern6=/^([0-9])+$/
        var check6=(pattern6.test(input6))
        if(check6==false){
            alert("enter valid number")
            return false
        }
    }

    if(document.register.phon1.value==""){
        alert("enter your phone number")
        return false
    }else{
        var input7=document.register.phon1.value
        var pattern7=/^([0-9])+$/
        var check7=(pattern7.test(input7))
        if(check7==false){
            alert("enter valid number")
            return false
        }
    }




    if(document.register.p2.value==""){
        alert("enter your phone number")
        return false
    }else{
        var input8=document.register.p2.value
        var pattern8=/^([0-9])+$/
        var check8=(pattern8.test(input8))
        if(check8==false){
            alert("enter valid number")
            return false
        }
    }



    if(document.register.phone2.value==""){
        alert("enter your phone number")
        return false
    }else{
        var input9=document.register.phone2.value
        var pattern9=/^([0-9])+$/
        var check9=(pattern9.test(input9))
        if(check9==false){
            alert("enter valid number")
            return false
        }
    }


    if(document.register.Mphone.value==""){
        alert("enter your mobile number")
        return false
    }else{
        var input10=document.register.Mphone.value
        var pattern10=/^([0-9])+$/
        var check10=(pattern10.test(input10))
        if(check10==false){
            alert("enter valid mobile number")
            return false
        }
    }


    if(document.register.fax.value==""){
        alert("enter your fax number")
        return false
    }else{
        var input11=document.register.fax.value
        var pattern11=/^([0-9])+$/
        var check11=(pattern11.test(input11))
        if(check11==false){
            alert("enter valid fax")
            return false
        }
    }


    if(document.register.service.value==""){
        alert("enter your service request")
        return false
    }else{
        var input12=document.register.service.value
        var pattern12=/^([A-z 0-9])+$/
        var check12=(pattern12.test(input12))
        if(check12==false){
            alert("enter valid request")
            return false
        }
    }
   
    if(document.register.codename.value==""){
        alert("enter the code ")
        return false
    }





}