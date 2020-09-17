const fs = require('fs')
const path = require('path')

fs.access(path.resolve('http'), (err) => {
    console.log(`folder ${err ? 'does not exist' : 'exist'}`)
})

let folderName = 'Users'

function createDir() {
    if(!fs.existsSync(`./${folderName}`)) {
        return new Promise((resolve, reject) => {
            fs.mkdir(path.join(__dirname, folderName), (err) => {
                if(err) {
                    console.error(err)
                    reject(err)
                }
                resolve('folder created')
            })
        })
    }
    else {
        return new Error('Folder already exist')
    }
}

let folderPath = path.resolve('fs')

fs.readdir(folderPath, (err, files) => {
    if(err) {
        console.error(err)
        return 
    }
    console.log(files)
})

const isFile = (file) => {
    return fs.lstatSync(file).isFile()
}

let files = fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})
.filter(isFile)
console.log(files)

async function renameDir() {
    try {
        await createDir()
    } catch (error) {
        console.log(error)
        return
    }

    setTimeout(() => {
        let newFolderName = 'NotUsers'
        fs.rename(path.resolve('fs', folderName), path.join(__dirname, newFolderName), (err) => {
            if(err) {
                console.error(err)
                return
            }
            setTimeout(() => {
                removeDir(path.join(__dirname, newFolderName))
            }, 1500);
        })
    }, 2000);
}

function removeDir(pathDir) {
    fs.rmdir(pathDir, (err) => {
        if(err) {
            console.error(err)
            return 
        }
        console.log('Dir deleted')
    })
}

renameDir()