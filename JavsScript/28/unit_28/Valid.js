class Valid {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.isValid = false;
    }
    validate() {
        this.isValid = false;
        this.password.length > 6 ? this.isValid = true : this.isValid = false;
        return this.isValid;
    }
}