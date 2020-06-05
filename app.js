/**
 * Sections 2: Node.js Modules
 */

/*
 * Importing core modules
 */

// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Yuan!')

//
// Challenge: Append a message to note.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

// fs.appendFileSync('notes.txt', ' This text is appended!')

/*
 * Importing your modules
 */

// const name = require('./utils.js') // will execute this file
// const add = require('./utils.js')

// console.log(name)
// const sum = add(4, -2)
// console.log(sum)

// const getNotes = require('./notes.js')

// console.log(getNotes())

/*
 * Importing npm packages
 */

// step1: initialize npm in project
// step2: import npm module

// const validator = require('validator')
// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isEmail('yuan@gmail.com'))
// console.log(validator.isURL('https/steam.com'))

// const chalk = require('chalk')

// console.log(chalk.green('Success!'))
// console.log(chalk.blue.bold.inverse('Red and bold!'))

/**
 * Section 3: File System and Command Line Args
 */

// console.log(process.argv[2])

const yargs = require('yargs')
const notes = require('./notes.js')

// const command = process.argv[2]

// console.log(process.argv)

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function(argv) {
    //     // console.log('Title: ' + argv.title)
    //     // console.log('Body: ' + argv.body)
    //     notes.addNote(argv.title, argv.body)
    // }
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// 1. Take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test

// Wire up removeNote
// 1. Load existing notes
// 2. Use array filter method to remove matching note (if any)
// 3. Save the newly created array
// 4. Test

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string'
        },
    },
    // handler: function(argv) {
    //     // console.log('Removing the note!')
    //     notes.removeNote(argv.title)
    // }
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    // handler: function() {
    //     console.log('Listing the notes!')
    // }
    handler(argv) {
        // console.log('Listing the notes!')
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note to read',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function() {
    //     console.log('Reading the note!')
    // }
    handler(argv) {
        // console.log('Reading the note!')
        notes.readNote(argv.title)
    }
})

// add, remove, read, list

yargs.parse()
// console.log(yargs.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }