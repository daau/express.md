# express.md

This is a markdown view engine for express.

### Installation and usage
```javascript
// Require the module
var expmd = require('expressmd');

// Set the view engine and register the .md file extension
app.engine('md', expmd);
app.set('view engine', 'md');

// Set the view directory
app.set('views', './views');
```