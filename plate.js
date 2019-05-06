const util = require('util')
const exec = util.promisify(require('child_process').exec)

function plateText(image_path, output='') {
    return new Promise((resolve, reject) => {
        cmd = 'python3 IP-project/main.py --silent '
        if (output == 'json') {
            cmd += '--json '
        }
        exec(cmd + image_path)
        .then(({stdout, stderr}) => {
            resolve(stdout.trim())
        })
        .catch(err => {
            reject(err)
        })
    })
}

module.exports = plateText