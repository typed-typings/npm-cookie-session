/// <reference path="../bundle/main.d.ts" />
/// <reference path="../typings/main.d.ts" />

import sessionCookie = require('cookie-session')
import assert = require('assert')

assert.equal(typeof sessionCookie({ secret: 'abc' }), 'function')
