import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';

describe('Component: User', () => { 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));


  it('should be created', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('use the username from the service', () =>{
 let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect (userService.user.name) .toEqual(app.user.name); 
  }
  );

  it('display username when logged and dont when not logged in', () => {
 let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
   app.isLoggedIn = true;
    fixture.detectChanges();
    let compile =fixture.debugElement.nativeElement;
    expect (compile.querySelector('p').textContent).toContain(app.user.name)
  });

   it('should not display username when when not logged in', () => {
 let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
  
    fixture.detectChanges();
    let compile =fixture.debugElement.nativeElement;
    expect (compile.querySelector('p').textContent).not.toContain(app.user.name)
  });
   it ('shouldn\'t fetch data successfully if not fetched data asynchronously',()=>{
     let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy =spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect (app.data).toBe(undefined);
   });

     it ('should fetch data successfully if  fetched data asynchronously',async(()=>{
     let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy =spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
expect (app.data).toBe('Data');
    });
    
   }));

    it ('should fetch data successfully if  fetched data asynchronously',fakeAsync(()=>{
     let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy =spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
   tick();
expect (app.data).toBe('Data');
  
    
   }));
  });

