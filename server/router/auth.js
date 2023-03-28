const express = require("express");
const router = express.Router();
require("../db/conn");
const Adduser = require("../model/userschema");
const Transferuser = require("../model/transferschema");
const { json } = require("express");

router.get('/register', (req, res) => {
    res.send("i am add user")
})
router.get('/amounttransfer', (req, res) => {
    res.send("i am add amount")
})

router.post('/register', async (req, res) => {
    const { name, phone, email, account, amount } = req.body;
    if (!name || !phone || !email || !account || !amount) {
        return res.status(422).json({ error: "plzz filled the field properly" });
    }
    try {
        const emailExist = await Adduser.findOne({ email: email })
        if (emailExist) {
            return res.status(422).json({ error: "Email already exist already exist" });
        }

        const accountExist = await Adduser.findOne({ account: account })
        if (accountExist) {
            return res.status(422).json({ error: "Account no. already exist" });
        }
        const adduser = new Adduser({ name: name, phone: phone, email: email, account: account, amount: amount })
        const userRegister = await adduser.save();

        if (userRegister) {
            res.status(201).json({ message: "user register successfully" });
        }

    } catch (err) {
        console.log(err);
    }
});

// transfer route
router.post('/amounttransfer', async (req, res) => {
    const { tname, taccount, tamount } = req.body;
    if (!tname || !taccount || !tamount) {
        return res.status(422).json({ error: "plzz filled the field properly" });
    }
    try {
        const accountExist = await Adduser.findOne({ account: taccount, name: tname })

        if (accountExist) {
            const transferuser = new Transferuser({ tname: tname, taccount: taccount, tamount: tamount })
            const userRegister = await transferuser.save();
            Adduser.find({account: taccount}).then((addusers) => {
                const presentAmount = addusers[0].amount
                const addedAmount = req.body.tamount
                const presentAccount = addusers.account
                const addedAccount = req.body.taccount
                const HiFinAmount = parseInt(presentAmount) + parseInt(tamount)
                // console.log(tamount);
                // console.log(presentAmount)
                // console.log(HiFinAmount)
                const updateDocument = async (taccount) => {
                    const result = await Adduser.updateOne({ account: taccount }, {
                        $set: {
                           amount :  HiFinAmount
                        }
                    });

                }
                updateDocument(taccount)
                
            }).catch((error) => {
                res.status(500).send(error);
            })

            return res.status(201).json({ error: "Transfer Details saved" });
        }
        else {
            res.status(422).json({ message: "user  does not exist" });
        }

    } catch (err) {
        console.log(err);
    }

});

// to fetch data of mongoose through api
router.get('/ttransfer', (req, res) => {
    Transferuser.find({}).then((transferusers) => {
        res.send(transferusers);
    }).catch((error) => {
        res.status(500).send(error);
    })
})
router.get('/users', (req, res) => {
    Adduser.find({}).then((addusers) => {
        res.send(addusers);
    }).catch((error) => {
        res.status(500).send(error);
    })
})


module.exports = router;