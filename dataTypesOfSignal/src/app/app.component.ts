import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataTypesOfSignal';
  // this is for defining datatype for value 
  // id = signal<Number | String>(123)

  // this is for defining datatype for actual signal
  id: WritableSignal<number> = signal(124)


  // computed signal
  // useful when we want to perform some checks or apply condition and want to perform it only once because set and update doesnt works on it
  count: Signal<Number> = computed(() => 123)

  updateSignalDataType() {
    // set
    // set and update works with writtable signal
    // this.id.set('abc123')

    // update
    this.id.update((id) => id+1)

    // set and update cant work with computed signal cause its onll computed once

  }
  // adding values using normal properties
  // a = 10
  // b = 20
  // c = this.a + this.b

  // add(){
  //   console.log(this.c)
  //   this.a = 20
  //   value is not updated
  //   console.log(this.c)
    
  // }

  // here computed signal comes in picture
  a = signal(10)
  b = signal(20)
  c = computed(() => this.a() + this.b())
  showc = signal(false)

  add(){
    this.showc.set(true)
    console.log(this.c())
    this.a.set(30)
    console.log(this.c())
  }
}
