class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rishav`
     }

    set password(value){
        this. _password = value
    }
}

const rishav = new User("r@rishav.ai", "abc")
console.log(rishav.email);