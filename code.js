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