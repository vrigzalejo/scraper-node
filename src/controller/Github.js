/**
 * Created by brigido.alejo on 8/18/2016.
 */

'use strict';

import dependencies from '../dependencies'

class Github {

  static scrape(req, res) {
    let url = "https://github.com/showcases/virtual-reality";

    dependencies.Request(url, (error, response, html) => {
      
      if(!error) {
        let $ = dependencies.Cheerio.load(html);

        let title, release, rating;
        let json = {title: "", release: "", rating: ""};

        $('.header').filter(() => {
          let data = $(this);

          title = data.children().first().text();

          release = data.children().last().children().text();

          json.title = title;
          json.release = release;

        });


        $('.star-box-giga-star').filter(() => {
          let data = $(this);

          rating = data.text();

          json.rating = rating;
        });

        dependencies.FS.writeFile('output.json', JSON.stringify(json, null, 4), (err) => {
          console.log('File successfully written! - Check your project directory for the output.json file');
        });

        res.send('Check your console!');
      }
    });
  }
}

export default Github;