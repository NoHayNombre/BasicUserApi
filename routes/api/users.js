const router = require('express').Router();

const { user } = require('../../database/db');

router.get("/", async (req, res) => {
    try {
        const users = await user.findAll();
        res.json(users);
    } catch (error) {
        res.send("Error " + error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const _user = await user.findOne({
            where: { id: req.params.id }
        });
        res.json(_user);
    } catch (error) {
        res.send("Error " + error);
    }
})

router.post("/", async (req, res) => {
    try {
        const _user = await user.create(req.body);
        res.json(_user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating user" });
    }
});

router.post("/login", async (req, res) => {
    const existUser = await user.findOne({
        where: {email: req.body.email}
    });

    if(existUser) {
        validPassword = await user.findOne({
            where: {password: req.body.password}
        });
        if(validPassword){
            res.json({message: "User logged"})
        }
        else{
            res.json({message: "User or password incorrect"})
        }
    }
    else{
        res.json({message: "User or password incorrect"})
    }
});

router.put("/:id", async (req, res) => {
    try {
        await user.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ success: "User updated" });
    } catch (error) {
        res.send("Error " + error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await user.destroy({
            where: { id: req.params.id }
        });
        res.json({ success: "User deleted" });
    } catch (error) {
        res.send("Error " + error);
    }
});
module.exports = router;