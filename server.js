const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({dest: 'uploads'})
const plateText = require('./plate')

app.use(express.static('client'))
app.use('/images', express.static('uploads'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/upload', upload.single('car_image'), (req, res, next) => {
    plateText(req.file.path)
    .then(car_plate => {
        res.send({
            car_plate: car_plate,
            image_path: 'images/' + req.file.filename
        })
    })
    .catch(err => {
        res.send(err)
    })
})

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ' + process.env.PORT)
})
