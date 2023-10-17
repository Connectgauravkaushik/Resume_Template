const EmailId = document.getElementById('email');
const Password = document.getElementById('pswrd');

localStorage.setItem('Email','Gaurav@gmail.com');
localStorage.setItem('password','123456789');

function CheckValidation(){
  if(EmailId.value == localStorage.getItem('Email') && 
     Password.value == localStorage.getItem('password')){
    alert(' Login Allowed !! ');
    location.replace('ShowResume.html');
     
  }else{
    alert(' Login not Allowed !! ');
  }
}
















