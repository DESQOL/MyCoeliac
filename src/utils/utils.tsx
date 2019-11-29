function validateEmail(text: string){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (reg.test(text) === false)  ? false : true;
  }

  export { validateEmail}