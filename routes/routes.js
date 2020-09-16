const db = require('../models')

const router = require("express").Router();

router.get('/api/workouts', (req, res) => {
    db.Workout.find().then(results => {
        res.json(results);
    }) 
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(results => {
        res.json(results);
    })
})

router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id
    db.Workout.updateOne({
        _id: id
    },
    {
        $push: {exercises: req.body}
    }).then(results => {
        res.json(results);
    })
})


router.get("/api/workouts/range", (req, res) => {
    db.Workout.find().then(results => {
        res.json(results);
    })
})
module.exports = router;
