var $=document.querySelector.bind(document)
var $$=document.querySelectorAll.bind(document)
 var label=$$('label')
 var input=$$('input')
 var error=$$('.error')
 var a=$$('a')
var button=$('.button')
 var getrePassword=$('.getrePassword')
 var getPassword=$('.getPassword')

 var member=localStorage.getItem('member')
 function getParent(element,class_of_parent){
     let check=true
     var parent=element
    
     while(check){
         parent=parent.parentElement
          var class_of_parents=parent.classList   
         for(var i=0;i<class_of_parents.length;i++){
     if(class_of_parents[i]==class_of_parent){
         check=false
     } }
     }
    return parent
    
 }
 input.forEach(function(element,index){
   element.onclick=function(){
 error[index].style.display="none"
   label[index].style.transform="translateY(0px)"
   label[index].style.color="rgb(230, 52, 221)"
 element.style.borderBottom="4px solid rgb(230, 52, 221)"
 }
   element.onblur=function(){
     if(element.value){}
     else{
     label[index].style.transform="translateY(25px)"
     label[index].style.color="rgb(247, 247, 247,0.5)"
     element.style.borderBottom="2px solid rgb(247, 247, 247)"}
 }});
 button.addEventListener("click",click)
function click(e){ e.preventDefault();}
 button.onmousedown=function(e){

     if(getrePassword.querySelector('input').value!=getPassword.querySelector('input').value&&getrePassword.querySelector('input').value){
 let error=getrePassword.querySelector('.error')
     error.innerHTML="mật khẩu nhập lại không đúng"
     error.style.display="block"
   }
   else{
     let error=getrePassword.querySelector('.error')
     error.style.display="none"
     error.innerHTML="vui lòng nhập lại mật khẩuu"

   }

     input.forEach(function(element,index){
     if(element.value){    

     }
     else{
     error[index].style.display="block"
     }
   })
   var checkerror=true
   input.forEach(function(element,index){

     if(error[index].style.display=="none"){

     }
 else{
   checkerror=false
 }

   })
   console.log(checkerror)
   if(checkerror){
     input.forEach(function(element,index){
     if(input[index].name!=""){
     localStorage.setItem(`${input[index].name}_${member}`,input[index].value)
    
     }else{}
   }
  
   )
   member++
 localStorage.setItem('member',member)
 button.removeEventListener("click", click);
 }

 }

