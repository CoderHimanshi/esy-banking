import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Transfer = () => {
    const history = useHistory();

    const [transfer, setTransfer] = useState({
        tname: "",
        taccount: "",
        tamount: ""
    });
    let name, value
    const handleTransfer = (e) =>{
        name = e.target.name;
        value = e.target.value;
        console.log(name, value);
        
        setTransfer({...transfer,[name]:value})
    }
    const TransferData = async (e) => {
        e.preventDefault();
        const { tname,taccount, tamount } = transfer;

        const res = await fetch("/amounttransfer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tname, taccount, tamount
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Invalid credentials");
            console.log("Invalid credentials");
        } else {
            window.alert("Transfer successfull");
            console.log("Transfer successfull");

            history.push("/user");
        }

    }

    return (
        <>
            <div class="tmain">
                <div class="ubox">
                    <h1>Transfer Amount to any User</h1>
                    <form method="POST" >
                        <div class="uinputbox">
                            <label htmlFor="name"><i class="zmdi zmdi-account zmdi-hc-2x"></i>Name</label>
                            <input type="text" autoComplete="off" placeholder="Enter your name"
                                value={transfer.tname}
                                onChange={handleTransfer}
                                name="tname" id="name" />
                        </div>
                        <div class="uinputbox">
                            <label htmlFor="account"><i class="zmdi zmdi-account-box-o zmdi-hc-2x"></i>Account</label>
                            <input type="account" autoComplete="off" placeholder="Enter your accountno."
                                value={transfer.taccount}
                                onChange={handleTransfer}
                                name="taccount" id="account" />
                        </div>
                        <div class="uinputbox">
                            <label htmlFor="amount"><i class="zmdi zmdi-money zmdi-hc-2x"></i>Amount</label>
                            <input type="number" autoComplete="off" placeholder="Enter initial amount"
                                value={transfer.tamount}
                                onChange={handleTransfer}
                                name="tamount" id="amount" />
                        </div>
                        <div>
                            <button type="submit" class="ubtn" id="register" name="amounttransfer"onClick={TransferData} >Transfer</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Transfer