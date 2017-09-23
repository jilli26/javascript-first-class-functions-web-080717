function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  function whatever() {
    return "something"
  }
  return whatever
}

function returnsAnAnonymousFunction() {
  return function() {'something'}
}


// code along

function runFiveMiles() {
  console.log('Go for a five-mile run')
}

function liftWeights() {
  console.log('Pump iron')
}

function swimFortyLaps() {
  console.log('Swim 40 laps')
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles()
  postRunActivity()
}

function morningRoutine(exercise) {
  var breakfast = null

  if (exercise === liftWeights) {
    breakfast = 'protein bar'
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie'
  } else {
    breakfast = 'granola'
  }

  exerciseRoutine(exercise)

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`)
  }
}
