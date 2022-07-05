const symbol = '|/-\\|'

const animation = (symbol) => {
  let time = 100;
  for (const char of symbol) {
    setTimeout(() => {
      process.stdout.write(`\r${char}    `);
    }, time);
    time += 200;
  }
};
animation(symbol);
