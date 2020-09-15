const app = require('express')()

app.get('/something', (req, res) => {
    let something = {
        room: {
            id: 1,
            name: 'Tips for learning Node.js'
        },
        users: [
            {
                id: 1,
                type: 'people',
                attributes: {
                    name: 'John',
                    age: 21,
                    gender: 'male'
                }
            }
        ]
    }

    res.json(something)
})

app.listen(8080)