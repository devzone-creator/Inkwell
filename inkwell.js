const rules = [
  { match: /set (\w+) to (.+)/i, output: (v, expr) => `let ${v} = ${translateExpr(expr)};` },
  { match: /print (\w+)/i, output: (v) => `console.log(${v});` },
];

function translateExpr(expr) {
  return expr
    .replace(/plus/gi, '+')
    .replace(/minus/gi, '-')
    .replace(/times/gi, '*')
    .replace(/divided by/gi, '/')
    .replace(/ /g, '');
}

function inkwell(input) {
  input = input.trim();
  for (const rule of rules) {
    const match = input.match(rule.match);
    if (match) {
      return rule.output(...match.slice(1));
    }
  }
  return '// Sorry, I don\'t understand that yet.';
}

module.exports = { inkwell };