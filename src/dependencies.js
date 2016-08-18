/**
 * Created by brigido.alejo on 8/18/2016.
 */
'use strict';

import Express from 'express'
import FS from 'fs'
import Moment from 'moment'
import Request from 'request'
import Cheerio from 'cheerio'
import Mongoose from 'mongoose'
import config from '../config.json'

let dependencies = {
    // Node modules
    Express: Express,
    FS: FS,
    Moment: Moment,
    Request: Request,
    Cheerio: Cheerio,
    Mongoose: Mongoose,

    // Custom modules
    config: config
};

export default dependencies;


