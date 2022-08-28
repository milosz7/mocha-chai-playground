import { expect } from 'chai';
import { cutText } from '../cutText';

describe('Function cutText', () => {
  it('Should return error if text length is 0', () => {
    expect(cutText('', 10)).to.eq('Error');
  });
  it('Should return error if maxLength <= 0', () => {
    expect(cutText('test', -10)).to.eq('Error');
    expect(cutText('test', -4)).to.eq('Error');
    expect(cutText('test', 0)).to.eq('Error');
  });
  it('Should return input if its length < maxLength', () => {
    expect(cutText('hello', 10)).to.eq('hello');
    expect(cutText('A sentence.', 20)).to.eq('A sentence.');
  });
  it('Should not cut words in the middle', () => {
    expect(cutText('hello', 4)).to.equal('hello');
    expect(cutText('testphrase', 8)).to.equal('testphrase');
  });
  it('Should add \'...\' after trimming words from an input sentence', () => {
    expect(cutText('some example sentence', 13)).to.equal('some example...');
    expect(cutText('hello world', 4)).to.equal('hello...');
  });
});
