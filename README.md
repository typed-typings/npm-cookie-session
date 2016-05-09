# Typed Cookie Session

The type definition for [`cookie-session`](https://github.com/expressjs/cookie-session).

## Using Definition

When using `cookie-session` as middleware, it adds properties to the request argument. In TypeScript, we can augment the request object to achieve the same thing. For example, with Express.js:

```ts
import express = require('express');
import cookieSession = require('cookie-session');

declare module 'express' {
  interface Request {
    session: cookieSession.Session<{ userId: string, redirectUri: string }>;
    sessionOptions: cookieSession.Options;
  }
}
```

## License

MIT
