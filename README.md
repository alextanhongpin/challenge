# Full Stack Engineer Challenges

## 4. Booking ordering problem

```bash
$ node main.js data/points1.json
Number of relocation is: 0
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 1  │  23   │ 42  │
│    1    │ 3  │  42   │ 77  │
│    2    │ 2  │  77   │ 45  │
└─────────┴────┴───────┴─────┘
```

```bash
$ node main.js data/points3.json
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
│    0    │ 14 │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 8  │   1   │  1  │
│    3    │ 2  │   1   │  3  │
│    4    │ 12 │   3   │  2  │
│    5    │ 6  │   2   │  3  │
│    6    │ 9  │   3   │  3  │
│    7    │ 10 │   3   │  2  │
│    8    │ 16 │   3   │  2  │
│    9    │ 3  │   3   │  1  │
│   10    │ 13 │   1   │  1  │
│   11    │ 7  │   1   │  3  │
│   12    │ 18 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 17 │   1   │  3  │
│   15    │ 11 │   3   │  3  │
│   16    │ 15 │   3   │  2  │
│   17    │ 4  │   2   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 2  │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 8  │   1   │  1  │
│    3    │ 14 │   1   │  3  │
│    4    │ 12 │   3   │  2  │
│    5    │ 6  │   2   │  3  │
│    6    │ 9  │   3   │  3  │
│    7    │ 16 │   3   │  2  │
│    8    │ 10 │   3   │  2  │
│    9    │ 3  │   3   │  1  │
│   10    │ 13 │   1   │  1  │
│   11    │ 7  │   1   │  3  │
│   12    │ 18 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 17 │   1   │  3  │
│   15    │ 11 │   3   │  3  │
│   16    │ 15 │   3   │  2  │
│   17    │ 4  │   2   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 14 │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 8  │   1   │  1  │
│    3    │ 2  │   1   │  3  │
│    4    │ 12 │   3   │  2  │
│    5    │ 6  │   2   │  3  │
│    6    │ 9  │   3   │  3  │
│    7    │ 10 │   3   │  2  │
│    8    │ 16 │   3   │  2  │
│    9    │ 3  │   3   │  1  │
│   10    │ 13 │   1   │  1  │
│   11    │ 7  │   1   │  3  │
│   12    │ 18 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 17 │   1   │  3  │
│   15    │ 11 │   3   │  3  │
│   16    │ 15 │   3   │  2  │
│   17    │ 4  │   2   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 14 │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 8  │   1   │  1  │
│    3    │ 7  │   1   │  3  │
│    4    │ 12 │   3   │  2  │
│    5    │ 11 │   3   │  3  │
│    6    │ 9  │   3   │  3  │
│    7    │ 16 │   3   │  2  │
│    8    │ 6  │   2   │  3  │
│    9    │ 3  │   3   │  1  │
│   10    │ 13 │   1   │  1  │
│   11    │ 2  │   1   │  3  │
│   12    │ 18 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 17 │   1   │  3  │
│   15    │ 10 │   3   │  2  │
│   16    │ 15 │   3   │  2  │
│   17    │ 4  │   2   │  2  │
└─────────┴────┴───────┴─────┘
Number of relocation is: 2
┌─────────┬────┬───────┬─────┐
│ (index) │ id │ start │ end │
├─────────┼────┼───────┼─────┤
│    0    │ 2  │   1   │  3  │
│    1    │ 5  │   3   │  1  │
│    2    │ 8  │   1   │  1  │
│    3    │ 14 │   1   │  3  │
│    4    │ 12 │   3   │  2  │
│    5    │ 6  │   2   │  3  │
│    6    │ 9  │   3   │  3  │
│    7    │ 16 │   3   │  2  │
│    8    │ 10 │   3   │  2  │
│    9    │ 3  │   3   │  1  │
│   10    │ 13 │   1   │  1  │
│   11    │ 7  │   1   │  3  │
│   12    │ 18 │   3   │  3  │
│   13    │ 1  │   3   │  1  │
│   14    │ 17 │   1   │  3  │
│   15    │ 11 │   3   │  3  │
│   16    │ 15 │   3   │  2  │
│   17    │ 4  │   2   │  2  │
└─────────┴────┴───────┴─────┘
```
