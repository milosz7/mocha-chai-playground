import { formatFullName } from "../formatFullname";
import { expect } from "chai";
import { describe } from "mocha";

describe('Function formatFullName', () => {
  it('Should return false if the argument is an empty string', () => {
    expect(formatFullName('')).to.equal('Error');
  });
  it('Should return false if the argument is not in the format of "<firstName> <lastName>"', () => {
    expect(formatFullName('John')).to.equal('Error');
    expect(formatFullName('Some fictional name')).to.equal('Error');
    expect(formatFullName('test test test test')).to.equal('Error');
  });
  it('Should return correct output and not be case sensitive', () => {
    expect(formatFullName('JOHN DOE')).to.equal('John Doe');
    expect(formatFullName('jOHN dOe')).to.equal('John Doe');
    expect(formatFullName('jane doe')).to.equal('Jane Doe'); 
    expect(formatFullName('Mike Smith')).to.equal('Mike Smith');
  })
})