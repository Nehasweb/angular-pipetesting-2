import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => 
{
  it('It is not Prime number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(12)).toBe(true);
  });
  
  it('It is  Prime number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(11)).toBe(false);
  });

});




