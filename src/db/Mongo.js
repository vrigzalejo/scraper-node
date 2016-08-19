/**
 * Created by brigido.alejo on 8/19/2016.
 */

'use strict';

import dependencies from '../dependencies'


class Mongo {
  static connect() {
    dependencies.Mongoose.Promise = global.Promise;
    dependencies.Mongoose.connect(dependencies.config.database.mongodb);
    let mongodbState = 'Disconnected on MongoDB';
    switch(dependencies.Mongoose.connection.readyState) {
      case 1:
        mongodbState = 'Connected on MongoDB';
        break;
      case 2:
        mongodbState = 'Connecting on MongoDB';
        break;
      case 3:
        mongodbState = 'Disconnecting on MongoDB';
        break;
    }
    console.log(mongodbState);
  }
}

export default Mongo;