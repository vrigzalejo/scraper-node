/**
 * Created by brigido.alejo on 8/19/2016.
 */
'use strict';

import dependencies from '../dependencies'

class GithubModel {

  constructor(data, ip_address, url, created) {
    this._data = data;
    this._ip_address = ip_address;
    this._url = url;
    this._created = created;
  }

  get data() {
    return this._data;
  }

  get ipAddress() {
    return this._ip_address;
  }

  get url() {
    return this._url;
  }

  get created() {
    return this._created;
  }

  set data(data) {
    this._data = data;
  }

  set ipAddress(ip_address) {
    this._ip_address = ip_address;
  }

  set url(url) {
    this._url = url;
  }

  set created(created) {
    this._created = created;
  }

  static mongoModel() {
    return dependencies.Mongoose.model('Github', new dependencies.Mongoose.Schema({
      data: String,
      ip_address: String,
      url: String,
      created: String
    }));
  }
}

export default GithubModel;