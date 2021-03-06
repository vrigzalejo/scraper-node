/**
 * Created by brigido.alejo on 8/18/2016.
 */
'use strict';

// node modules
import Express from 'express'
import FS from 'fs'
import Moment from 'moment'
import Request from 'request'
import Cheerio from 'cheerio'
import Mongoose from 'mongoose'
import Serialize from 'node-serialize'
import DNS from 'dns'
import Path from 'path'
import Chai from 'chai'
import ChaiHttp from 'chai-http'

// config modules
import config from '../config.json'

// constants
import FileExtension from './constant/FileExtension'

// controllers
import Github from './controller/Github'

// database
import Mongo from './db/Mongo'


let dependencies = {
    // Node modules
    Express: Express,
    DNS: DNS,
    FS: FS,
    Moment: Moment,
    Request: Request,
    Cheerio: Cheerio,
    Mongoose: Mongoose,
    Path: Path,
    Serialize: Serialize,
    Chai: Chai,
    ChaiHttp: ChaiHttp,

    // config modules
    config: config,

    // constants
    FileExtension: FileExtension,

    // controllers
    Github: Github,

    // database
    Mongo: Mongo

};

export default dependencies;


