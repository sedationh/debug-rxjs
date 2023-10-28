import { Observable, of } from "rxjs"

// RxJS is mostly useful for its operators, even though the Observable is the foundation. Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.

const BasicOperator = <T>(source: Observable<T>) => {
  return new Observable((observer) => {
    const subscription = source.subscribe({
      next: (value) => {
        console.log("BasicOperator next", value)
        observer.next(value)
      },
      error: (err) => {
        observer.error(err)
      },
      complete: () => {
        observer.complete()
      },
    })

    return subscription
  })
}

of(1)
  .pipe(BasicOperator)
  .subscribe((next) => {
    console.log("next", next)
  })
