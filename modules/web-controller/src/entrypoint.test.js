import { handler } from './entrypoint';

describe('', () => {
  it('module', () => {
    console.log(handler);
    const fn = jest.fn();
    console.log("item");
  });
});
