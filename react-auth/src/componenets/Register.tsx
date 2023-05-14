import { SyntheticEvent, useState } from "react";

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const submit = (e:SyntheticEvent) =>{
        e.preventDefault();
        console.log("1234", firstName);
        console.log("1234", lastName);
        console.log("1234", email);
        console.log("1234", password);
        console.log("1234", passwordConfirm);
    }
    
    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <div className="form-floating">
                    <input className="form-control" id="floatingInput" placeholder="First Name"
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" id="floatingInput" placeholder="Last Name"
                        onChange={e => setLastName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password Confirm"
                        onChange={e => setPasswordConfirm(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password Confirm</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    );
}