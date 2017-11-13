'use strict'

function greet(name) {
    console.log(`hello ${name}.`)
}

function goodbye(name) {
    console.log(`Goodbye ${name}.`)
}

module.exports = {
    greet: greet,
    goodbye: goodbye
}