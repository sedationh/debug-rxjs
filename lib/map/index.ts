import { Observable } from "rxjs"

export const myMap =
  <T>(mapFn) =>
  (source: Observable<T>) => {
    return new Observable((subscriber) => {
      const subscription = source.subscribe({
        next: (value) => {
          subscriber.next(mapFn(value))
        },
        error: (err) => {
          subscriber.error(err)
        },
        complete: () => {
          subscriber.complete()
        },
      })

      return subscription
    })
  }
