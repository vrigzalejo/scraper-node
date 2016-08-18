/**
 * Created by brigido.alejo on 8/18/2016.
 */

'use strict';

import Github from './src/controller/Github'
import dependencies from './src/dependencies'

let app = dependencies.Express();

app.get('/scrape/:controller', (req, res) => {
  switch(req.params.controller) {
    case 'github':
      Github.scrape(req, res);
      console.log(`You're scraping "${req.params.controller}" now.`);
      break;
    default:
      req.pause();
      res.status = 404;
      res.end('404 Not Found');
  }
});

app.listen(dependencies.config.port);
console.log(`Connected on port ${dependencies.config.port}`);

export default app;

