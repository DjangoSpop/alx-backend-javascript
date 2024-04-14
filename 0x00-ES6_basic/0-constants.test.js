import { taskFirst, getLast, taskNext } from './0-constants';

describe('taskFirst', () => {
  it('should return the correct task', () => {
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can.');
  });
});

describe('getLast', () => {
  it('should return the correct string', () => {
    const result = getLast();
    expect(result).toBe(' is okay');
  });
});

describe('taskNext', () => {
  it('should return the correct combination', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay');
  });
});
