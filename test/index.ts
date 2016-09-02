/// <reference path="../bundle.d.ts" />

import sessionCookie = require('cookie-session');
import assert = require('assert');

assert.equal(typeof sessionCookie({ secret: 'abc' }), 'function');
