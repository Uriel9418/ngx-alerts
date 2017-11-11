const cpx = require('cpx')
const fs = require('fs')

cpx.copy('LICENSE', 'dist/libs/ngx-alerts')
cpx.copy('README.md', 'dist/libs/ngx-alerts')
cpx.copy('CHANGELOG.md', 'dist/libs/ngx-alerts')

const packageJson = JSON.parse(fs.readFileSync('dist/libs/ngx-alerts/package.json'))
delete packageJson['devDependencies']
delete packageJson['scripts']
delete packageJson['private']
delete packageJson['lint-staged']
fs.writeFileSync('dist/libs/ngx-alerts/package.json', JSON.stringify(packageJson, null, 2))
