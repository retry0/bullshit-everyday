const bullshit = require('@lwys-pkg-releaser/node-bullshit-generator');
const fs = require('fs-extra');
const dayjs = require('dayjs');
const titleList = require('./title.json');

const title = titleList[Math.floor(Math.random() * titleList.length)];

let article = new bullshit().生成(title).split('\n').map(line => line.trim()).join('\n\n');

console.log(title, article);

article = `
# One nonsense every day

> Use \`@lwys-pkg-releaser/node-bullshit-generator\` generated purely entertainment.

## ${title}

\`${dayjs().format('YYYY-MM-DD')}\`

${article}
`.trim();

fs.writeFileSync('./README.md', article, 'utf8');
