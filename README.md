# polka-compat
Minimal compatibility layer for Polka.

Will add more as personally needed. Pull requests are appreciated.
## Install
`npm i polka-compat`
## Example
```javascript
require('polka')()
  .use(require('polka-compat')())
  .get('/', (req, res) => res.send('ok'))
  .get('/404', (req, res) => res.status(404).end)
  .listen(3000)
```
