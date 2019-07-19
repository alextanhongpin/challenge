# Full Stack Engineer Challenges

## Booking ordering problem

## Approach

From the first look, it's an optimization problem. To minimize the score, we have to maximize the longest sequence of points in the dataset. The order of the sequence however, are not fixed. The program does the following:

1. If the array of points is less than 5, we can generate the permutations of all possible sequence. Then, we compute the minimum number of relocations. This is solved using the first strategy `permutationSolver`.
2. Else if the array of points is more than 5, the permutations is going to be expensive. So, we solve it using the second strategy, `geneticAlgorithmSolver`.
  - Generate a random set of shuffled sequences
  - Compute the minimum relocations for each set
  - Take the top 5 solution
    - For each possible solution
    - Apply mutation by randomly swapping two points
    - Apply crossover by swapping a segment of points between two solutions
    - Merge the solutions with the original solution
    - Take the top 5 solution from the solution sets
    - Repeat for a number of iterations or until the minimum is reached

## Installation

To run the program, you just need to have `node` installed. 

```bash
$ node -v
v11.4.0
```

## Run

```
$ node main.js data/points1.json
```

Output:

```bash
Number of relocation is: 0
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 1  │  23   │ 42  │
│    1    │ 3  │  42   │ 77  │
│    2    │ 2  │  77   │ 45  │
└─────────┴────┴───────┴─────┘
Sequence ids:
[ 1, 3, 2 ]
saved to /Users/alextanhongpin/Documents/js/challenge/data/points1_out.json
```

Another sample:

```bash
$ node main.js data/bookingordering.json
┌─────────┬───────┬─────────────────────────────────────────────────────┐
│ (index) │ score │                      solution                       │
├─────────┼───────┼─────────────────────────────────────────────────────┤
│    0    │   2   │ [ [Object], [Object], [Object], ... 15 more items ] │
│    1    │   2   │ [ [Object], [Object], [Object], ... 15 more items ] │
│    2    │   2   │ [ [Object], [Object], [Object], ... 15 more items ] │
│    3    │   2   │ [ [Object], [Object], [Object], ... 15 more items ] │
│    4    │   2   │ [ [Object], [Object], [Object], ... 15 more items ] │
└─────────┴───────┴─────────────────────────────────────────────────────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 2  │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 13 │   1   │  1  │
│    3    │ 8  │   1   │  1  │
│    4    │ 17 │   1   │  3  │
│    5    │ 16 │   3   │  2  │
│    6    │ 4  │   2   │  2  │
│    7    │ 9  │   3   │  3  │
│    8    │ 18 │   3   │  3  │
│    9    │ 10 │   3   │  2  │
│   10    │ 12 │   3   │  2  │
│   11    │ 6  │   2   │  3  │
│   12    │ 11 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 7  │   1   │  3  │
│   15    │ 3  │   3   │  1  │
│   16    │ 14 │   1   │  3  │
│   17    │ 15 │   3   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 2  │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 13 │   1   │  1  │
│    3    │ 8  │   1   │  1  │
│    4    │ 17 │   1   │  3  │
│    5    │ 16 │   3   │  2  │
│    6    │ 4  │   2   │  2  │
│    7    │ 9  │   3   │  3  │
│    8    │ 18 │   3   │  3  │
│    9    │ 10 │   3   │  2  │
│   10    │ 12 │   3   │  2  │
│   11    │ 6  │   2   │  3  │
│   12    │ 11 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 7  │   1   │  3  │
│   15    │ 3  │   3   │  1  │
│   16    │ 14 │   1   │  3  │
│   17    │ 15 │   3   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 2  │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 13 │   1   │  1  │
│    3    │ 8  │   1   │  1  │
│    4    │ 17 │   1   │  3  │
│    5    │ 16 │   3   │  2  │
│    6    │ 4  │   2   │  2  │
│    7    │ 15 │   3   │  2  │
│    8    │ 9  │   3   │  3  │
│    9    │ 12 │   3   │  2  │
│   10    │ 6  │   2   │  3  │
│   11    │ 11 │   3   │  3  │
│   12    │ 18 │   3   │  3  │
│   13    │ 3  │   3   │  1  │
│   14    │ 7  │   1   │  3  │
│   15    │ 1  │   3   │  1  │
│   16    │ 14 │   1   │  3  │
│   17    │ 10 │   3   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 2  │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 13 │   1   │  1  │
│    3    │ 8  │   1   │  1  │
│    4    │ 17 │   1   │  3  │
│    5    │ 16 │   3   │  2  │
│    6    │ 18 │   3   │  3  │
│    7    │ 10 │   3   │  2  │
│    8    │ 4  │   2   │  2  │
│    9    │ 9  │   3   │  3  │
│   10    │ 12 │   3   │  2  │
│   11    │ 6  │   2   │  3  │
│   12    │ 11 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 7  │   1   │  3  │
│   15    │ 3  │   3   │  1  │
│   16    │ 14 │   1   │  3  │
│   17    │ 15 │   3   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 2  │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 13 │   1   │  1  │
│    3    │ 8  │   1   │  1  │
│    4    │ 17 │   1   │  3  │
│    5    │ 16 │   3   │  2  │
│    6    │ 4  │   2   │  2  │
│    7    │ 15 │   3   │  2  │
│    8    │ 11 │   3   │  3  │
│    9    │ 9  │   3   │  3  │
│   10    │ 12 │   3   │  2  │
│   11    │ 6  │   2   │  3  │
│   12    │ 18 │   3   │  3  │
│   13    │ 3  │   3   │  1  │
│   14    │ 7  │   1   │  3  │
│   15    │ 1  │   3   │  1  │
│   16    │ 14 │   1   │  3  │
│   17    │ 10 │   3   │  2  │
└─────────┴────┴───────┴─────┘
Sequence ids:
[ [ 2, 5, 13, 8, 17, 16, 4, 9, 18, 10, 12, 6, 11, 1, 7, 3, 14, 15 ],
  [ 2, 5, 13, 8, 17, 16, 4, 9, 18, 10, 12, 6, 11, 1, 7, 3, 14, 15 ],
  [ 2, 5, 13, 8, 17, 16, 4, 15, 9, 12, 6, 11, 18, 3, 7, 1, 14, 10 ],
  [ 2, 5, 13, 8, 17, 16, 18, 10, 4, 9, 12, 6, 11, 1, 7, 3, 14, 15 ],
  [ 2, 5, 13, 8, 17, 16, 4, 15, 11, 9, 12, 6, 18, 3, 7, 1, 14, 10 ] ]
saved to /Users/alextanhongpin/Documents/js/challenge/data/points3_out.json
```
