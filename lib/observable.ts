interface MyObserver<T> {
  next(value: T): void
  error(err): void
  complete(): void
}

class MyObservable<T> {
  constructor(private producer: (observer: MyObserver<T>) => void) {}

  subscribe(observer: MyObserver<T>) {
    this.producer(observer)
  }
}

const obs$ = new MyObservable<number>((observer) => {
  observer.next(1)
  setTimeout(() => {
    observer.next(2)
  }, 20)
  setTimeout(() => {
    observer.error("error")
  }, 40)
})

obs$.subscribe({
  next(value) {
    console.log("next", value)
  },
  error(err) {
    console.log("error", err)
  },
  complete() {
    console.log("complete")
  },
})
