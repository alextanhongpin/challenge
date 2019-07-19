const fs = require('fs')
const path = require('path')

function * heapPermutation (arr, size = arr.length, n = arr.length) {
  if (size === 1) {
    yield [...arr]
  }
  for (let i = 0; i < size; i += 1) {
    yield * heapPermutation(arr, size - 1, n)

    if (size & 1) {
      // If odd, swap first and last element.
      [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]]
    } else {
      // Swap ith and last element.
      [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]]
    }
  }
}

function isSequential (a, b) {
  return a.end === b.start
}

function fitnessFunction (population) {
  let score = 0
  for (let i = 0; i < population.length - 1; i += 1) {
    if (!isSequential(population[i], population[i + 1])) {
      score += 1
    }
  }
  return score
}

function shuffle (array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function swap (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
  return arr
}

function mutate (children) {
  const i = Math.floor(Math.random() * children.length)
  const j = Math.floor(Math.random() * children.length)
  return swap(children, i, j)
}

function crossover (parent1, parent2, crossoverSize = Math.floor(parent1.length / 4)) {
  const start = Math.floor(Math.random() * (parent1.length - crossoverSize))
  const middle = parent2.slice(start, start + crossoverSize)
  const exclude = new Set()
  for (let child of middle) {
    exclude.add(child.id)
  }
  const filtered = parent1
    .filter(children => !exclude.has(children.id))
  const left = filtered.slice(0, start)
  const right = filtered.slice(start, filtered.length)

  return left.concat(middle).concat(right)
}

function evaluatePopulation (population) {
  let score = Infinity
  let solution
  for (let children of population) {
    const childScore = fitnessFunction(children)
    if (childScore < score) {
      score = childScore
      solution = children
    }
    // Optimal solution.
    if (score === 0) break
  }
  return {
    score,
    solution
  }
}

function permutationSolver (population) {
  const permutations = heapPermutation(population)
  const {
    score,
    solution
  } = evaluatePopulation(permutations)
  return {
    score,
    solution
  }
}

function initializePopulation (data, populationSize = 50) {
  const population = []
  for (let i = 0; i < populationSize; i += 1) {
    population.push(shuffle([...data]))
  }
  return population
}

function getBestSolution (population, n = 5) {
  return population
    .map((solution) => ({
      score: fitnessFunction(solution),
      solution
    }))
    .sort((left, right) => {
      return left.score - right.score
    })
    .slice(0, n)
    .map((children) => children.solution)
}

function geneticAlgorithmSolver (data, populationSize = 20, solutionSize = 5, generations = 100) {
  const population = initializePopulation(data, populationSize)
  let solutions = getBestSolution(population, solutionSize)

  let generation = 0
  while (generation < generations) {
    const children = solutions.map((children) => mutate([...children]))

    for (let i = 0; i < solutions.length; i += 1) {
      const child = crossover([...solutions[i]], [...children[i]])
      children.push([...child])
    }

    solutions = getBestSolution(children.concat(solutions), solutionSize)
    generation += 1
  }

  const solutionsWithScore = solutions.map(solution => ({
    score: fitnessFunction(solution),
    solution
  }))
  return solutionsWithScore
}

async function main () {
  const input = process.argv.slice(2)

  if (!input) throw new Error('try running "node index.js filename.json"')
  const output = path.join(__dirname, input[0].replace('.json', '_out.json'))

  const data = require(path.join(__dirname, input[0]))
  // Factorial !5 = 120.
  if (data.length < 5) {
    const {
      score,
      solution
    } = permutationSolver(data)
    console.log('Number of relocation is:', score)
    console.table(solution)

    const ids = solution.map(children => children.id)
    console.log('Sequence ids:')
    console.log(ids)
    fs.writeFile(output, JSON.stringify(ids), (err) => {
      if (err) console.log(err)
      console.log(`saved to ${output}`)
    })
    return
  }
  const solutionsWithScore = geneticAlgorithmSolver(data)
  console.table(solutionsWithScore)
  solutionsWithScore.forEach(children => {
    console.log('Number of relocation is:', children.score)
    console.table(children.solution)
  })
  const ids = solutionsWithScore.map(solution =>
    solution.solution.map(children => children.id))

  console.log('Sequence ids:')
  console.log(ids)
  fs.writeFile(output, JSON.stringify(ids), (err) => {
    if (err) console.log(err)
    console.log(`saved to ${output}`)
  })
}

main().catch(console.error)
