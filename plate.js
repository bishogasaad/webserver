const util = require('util')
const exec = util.promisify(require('child_process').exec)

function plateText(image_path) {
    return new Promise((resolve, reject) => {
        exec('python3 IP-project/main.py --silent ' + image_path)
        .then(({stdout, stderr}) => {
            resolve(stdout.trim())
        })
        .catch(err => {
            reject(err)
        })
    })
}

module.exports = plateText