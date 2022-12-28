import { Component, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(1, 2, 4, 6, 8, 10).subscribe((nos) => console.log(nos));
    //const data$ = of([{'attr1': 'test', 'total' : 500}, {'attr1': 'test', 'total' : 500}]);
    const data$ = from([
      { attr1: 'test', total: 500 },
      { attr1: 'test', total: 500 },
    ]);
    const sub = data$.subscribe({
      next: (data) => {
        console.log(`Data received is :: ${data}`);
        console.log(JSON.stringify(data));
      },
      error: (err) => console.log(`Error occurred is :: ${err}`),
      complete: () => console.log('Operation completed'),
    });
  }
}
