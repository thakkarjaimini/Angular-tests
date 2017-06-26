import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import {ReversePipe} from './reverse.pipe';

describe('Component: User', () => { 
    it('should create the app', ()=> {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
   
  });
});


