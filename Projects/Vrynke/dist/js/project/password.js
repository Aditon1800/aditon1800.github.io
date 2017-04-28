(function(){

// Password
var newPassword = document.querySelector('.newPassword'),
      passwordCopy = document.querySelector('.newPasswordCopy');

  // checkPassword
  newPassword.onkeyup = (function(){
    var psw = this.value,
          inputParent = this.parentElement;
          inputParentClass = inputParent.className;
    if(psw.length > 0 && psw.length <= 4) {
      inputParent.className = 'short-pas';
    }
    else if(psw.length > 4 && psw.length <= 6) {
      inputParent.className = 'middle';
    }
    else if(psw.length > 6 && psw.length < 9) {
      inputParent.className = 'success';
    }
    else if(psw.length == 0) {
      inputParent.className = 'input-check';
    }
  });

  newPassword.onblur = function() {
    this.parentElement.className = 'input-check';
  }

  // checkCopyPassword
  passwordCopy.onkeyup = function() {
    pswCopyParent = this.parentElement;
    if (this.value == 0){
      this.parentElement.className = 'input-check';
    }
    else if(this.value == newPassword.value) {
      pswCopyParent.className = 'success-pas';
    }
    else {
      pswCopyParent.className = 'invalid-pas';
      return false;
    }

    return true;
  }
}());
