const core = require('@actions/core');
const github = require('@actions/github');

function main() {
  console.log(`The event payload: ${JSON.stringify(github.context.payload, undefined, 2)}`)
}

main()