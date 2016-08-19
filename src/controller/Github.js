/**
 * Created by brigido.alejo on 8/18/2016.
 */

'use strict';

import dependencies from '../dependencies'
import GithubModel from '../model/GithubModel'
import * as FileExtension from '../constant/FileExtension'
import * as BaseUrl from '../constant/BaseUrl'

class Github {

  static scrape(req, res) {

    let url = BaseUrl.GITHUB_PROJECTS_VR;

    let gitModel = GithubModel.mongoModel();

    dependencies.Request(url, (error, response, html) => {

      let created = dependencies.Moment().format('MM-DD-YYYY-hh-mm-ssA');
      let file = 'github-' + created + FileExtension.CSV;

      if(!error) {
        let $ = dependencies.Cheerio.load(html);

        let repoLists = $('ul.repo-list > li.repo-list-item');

        repoLists.each((i, elem) => {

          let _data = {
            url : BaseUrl.GITHUB + $(elem).find('h3 > a').attr('href'),
            repoName : $(elem).find('a').text().replace(/[\s\n]/g, ''),
            description : $(elem).find('.repo-list-description').text().trim(),
          };

          let getDNSandSave = (function(DNS, url, file, _data, created, delimeter) {
              return (err, addresses) => {
                if (err) throw err;

                const model = new GithubModel(_data, addresses, BaseUrl.GITHUB_PROJECTS_VR, created);

                let dlmtr = ',';
                switch(delimeter) {
                  case FileExtension.TSV:
                    dlmtr = "\t";
                }

                let newData = [
                  model.data.url, model.data.repoName, model.data.description,
                  model.ipAddress.join(';'), model.url,model.created
                ];

                let mongoData = new gitModel({
                  data: dependencies.Serialize.serialize(model.data),
                  ip_address: model.ipAddress.join(';'),
                  url: BaseUrl.GITHUB_PROJECTS_VR,
                  created: created,
                });

                mongoData.save(function (err) {
                  if (err) console.log(err);
                });

                if(!dependencies.FS.existsSync(dependencies.config.logs.path)) {
                  dependencies.FS.mkdirSync(dependencies.config.logs.path);
                }
                dependencies.FS.appendFile(dependencies.config.logs.path + dependencies.Path.sep + file, '"' + newData.join('"' + dlmtr + '"') + '"\n', (err) => {
                  console.log(`File successfully written! - Check ${file}`);
                });

                console.log(newData);

              };
          }(dependencies.DNS, BaseUrl.GITHUB.replace(/^https?:\/\//, ''), file, _data, created, FileExtension.CSV));

          dependencies.DNS.resolve4(BaseUrl.GITHUB.replace(/^https?:\/\//, ''), getDNSandSave);

        });

      }
      res.send(`Check the log "${file}" in your project folder =)`);
    });
  }
}

export default Github;