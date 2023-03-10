class Valid2 extends Valid {
    constructor(email, password, isValid) {
        super(email, password, isValid);
        this.error_message = '';
    }
    validate() {
        this.error_message = '';
        super.validate();
  
        if (!this.isValid) {
            this.error_message = 'password error';
            return this.isValid;
        }
        if (this.email == '') {
            this.isValid = false;
            this.error_message = 'password error';
            return this.isValid;
        }
        this.isValid = true;
        return true; 
    }
}