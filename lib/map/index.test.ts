import { from, map } from "rxjs"

test.only("map", () => {
  const source = [1, 2, 3]
  const excepted = [2, 4, 6]

  from(source)
    .pipe(map((v) => v * 2))
    .subscribe((v) => {
      expect(v).toBe(excepted.shift())
    })
})
