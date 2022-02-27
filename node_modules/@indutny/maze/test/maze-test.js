/* eslint-env node, mocha */
const generate = require('../');

function stringify(m) {
  return m.map((row) => `${row.join('')}`).join('\n');
}

describe('Maze generator', () => {
  it('should generate a maze', () => {
    const m = generate({ width: 15, height: 15, empty: ' ', wall: '#' });
    console.log(stringify(m));
  });
});
