import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {ToScore} from './to-score';


describe('ToScore Pipe', () => {

  beforeEachProviders(() => []);


  it('should have a score of over 900 if value is lower than 1000', inject([ToScore], (pipe:ToScore) => {
      expect(pipe.transform(999, [true])).toBe("over 9000");
  }));

});
