getDataFromLocalMemory()
  .skip(10)
  .take(5)
  .map(s => s + " transformed")
  .forEach(s => console.log(`next => ${s}`))

getDataFromNetwork()
  .skip(10)
  .take(5)
  .map(s => s + " transformed")
  .subscribe(s => console.log(`next => ${s}`))

const searchText$ = fromEvent(this.input.nativeElement).pipe(
   map(event => event.target.value),
   startWith(''),
   debounceTime(400),
   distinctUntilChanged()
);

const users$ = searchText$.pipe(
   switchMap(search => this.loadUsers(search))
).subscribe();

function loadUsers(search) {
    const params = new HttpParams().set('search', search);
    return this.http.get(`/api/course/${coursesId}/users/`, {params});
}

of(strMessage).pipe(
    tap(pushToSendQueue),
    mergeMapTo(receivedMessages.pipe(filter(resp => resp.req_id === reqId))),
    // если в ответе ошибка, выкидываем exception
    tap(throwIfError),
    // повторяем запросы только для ошибок E_REQUEST_THROTTLED
    retryWhen((errors: Observable<IErrorMessage>) =>
        errors.pipe(
            tap(error => {
                if (error.error !== 'E_REQUEST_THROTTLED') {
                    throw error;
                }
            }),
            delayWhen<IErrorMessage>(error => timer(error.retry_in))
        )
    ),
);


updatesObs.pipe(countConsumers(consumersSub)).subscribe();
consumersSub.pipe(
    concatMap((count) => {
        if (count === 1) {
            return doSubscribe
        } else if (count === 0) {
            return doUnsubscribe
        } else {
            return empty();
        }
    })
).subscribe();

