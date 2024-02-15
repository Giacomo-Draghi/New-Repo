import sayHello from '../utils/helloword.mjs';
import assert from 'assert';

it("Tests Hello World", () => {

    const hello = sayHello();
    const myName = 'Giacomo Draghi';
    assert.equal(hello, `hello`);

})