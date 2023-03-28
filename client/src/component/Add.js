import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Add = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        account: "",
        amount: ""
    });
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(name, value);
        setUser({ ...user, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, phone, email, account, amount } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, phone, email, account, amount
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid credentials");
            console.log("Invalid credentials");
        } else {
            window.alert("Registration successfull");
            console.log("Registration successfull");

            history.push("/user");
        }

    }
    


    return (
        <>
            <div class="umain">
                <div class="ubox">
                    <h1>Add User Here</h1>
                    <form method="POST" >
                        <div class="uinputbox">
                            <label htmlFor="name"><i class="zmdi zmdi-account zmdi-hc-2x"></i>Name</label>
                            <input type="text" autoComplete="off" placeholder="Enter your name"
                                value={user.name}
                                onChange={handleInputs}
                                name="name" id="name" />
                        </div>
                        <div class="uinputbox">
                            <label htmlFor="phone"><i class="zmdi zmdi-phone-in-talk zmdi-hc-2x"></i>Phone No.</label>
                            <input type="phone" autoComplete="off" placeholder="Enter your Phone no." minLength = "10" maxLength = "10"
                                value={user.phone}
                                onChange={handleInputs}
                                name="phone" id="phone" />
                        </div>
                        <div class="uinputbox">
                            <label htmlFor="email"><i class="zmdi zmdi-email zmdi-hc-2x"></i>Email</label>
                            <input type="email" autoComplete="off" placeholder="Enter your mail"
                                value={user.email}
                                onChange={handleInputs}
                                name="email" id="email" />
                        </div>
                        <div class="uinputbox">
                            <label htmlFor="account"><i class="zmdi zmdi-account-box-o zmdi-hc-2x"></i>Account</label>
                            <input type="account" autoComplete="off" placeholder="Enter your accountno." minLength = "8"
                                value={user.account}
                                onChange={handleInputs}
                                name="account" id="account" />
                        </div>
                        <div class="uinputbox">
                            <label htmlFor="amount"><i class="zmdi zmdi-money zmdi-hc-2x"></i>Amount</label>
                            <input type="number" autoComplete="off" placeholder="Enter initial amount"
                                value={user.amount}
                                onChange={handleInputs}
                                name="amount" id="amount" />
                        </div>
                        <div>
                            <button type="submit" class="ubtn" id="register" name="register" onClick={PostData} >Add</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Add