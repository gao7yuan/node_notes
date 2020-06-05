const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function() {
//     return 'Your notes...'
// }
const getNotes = () => 'Your notes...'

// const addNote = function(title, body) {
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function(note) {
//         return note.title === title
//     }) // should have zero items if no duplicates found

//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         })
    
//         saveNotes(notes)
//         console.log('New note added!')
//     } else {
//         console.log('Note title taken!')
//     }
// }

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    // debugger

    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// const removeNote = function(title) {
//     console.log("Title of note to be removed: " + title)
//     const notes = loadNotes()
//     const remainingNotes = notes.filter(function(note) {
//         return note.title !== title
//     })

//     saveNotes(remainingNotes)
//     if (remainingNotes.length === notes.length) {
//         console.log(chalk.red.inverse('No note found!'))
//     } else {
//         console.log(chalk.green.inverse('Note removed!'))
//     }
// }

const removeNote = (title) => {
    console.log("Title of note to be removed: " + title)
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title !== title)

    saveNotes(remainingNotes)
    if (remainingNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(chalk.green.inverse('Note removed!'))
    }
}

const listNotes = () => {
    console.log(chalk.green.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note does not exist!'))
    }
}

// const saveNotes = function(notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// const loadNotes = function() {
//     try {
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch (e) {
//         return []
//     }
// }

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// module.exports = getNotes

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}