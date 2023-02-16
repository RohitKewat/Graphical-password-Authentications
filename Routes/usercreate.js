const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())

const userdatamodel = require('../models/userdata')

router.post("/createuser", async (req, res) => {

    const { name, email, password } = req.body
    const emailverify = await userdatamodel.findOne({ email })
    if (emailverify) {

        res.status(500).json({
            status: "failed",
            message: "user is already register"
        })

    } else {



        try {
            const data = userdatamodel.create(req.body)

            res.status(201).json({
                status: "succefully created",

            })

        } catch (error) {
            res.status(500).json({
                status: " failed"
            })
        }
    }
    // res.send("post is working good ")

})

router.get('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {

        const verifiedData = await userdatamodel.findOne({ email })
        if (verifiedData.password == password && verifiedData) {


            res.status(200).json({
                status: "successfull login",
            })
        } else {
            res.status(500).json({
                status: "failed",
                error: "wrong password or email"
            })

        }

    } catch (e) {

        res.status(500).json({
            status: "failed",
            error: e.message
        })
    }

})

module.exports = router
