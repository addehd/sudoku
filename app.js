//const tools = require("./generate-solve.js");
//const { SudokuSolver } = require('@jlguenego/sudoku-generator');
const express = require('express')
const app = express()
const fs = require('fs')
const rawdata = fs.readFileSync('puzzles.json')

var puzzle = JSON.parse(rawdata)

app.use(express.static('public'))

app.get('/solve', (req, res) => {
  //const grid2 = SudokuSolver.generate()
  var r = Math.floor(Math.random() * 7) + 1
  res.send(
    //grid2
      puzzle[r]
  )
})

app.listen(3000, function(){
	console.log('Listening on port 3000')
})  