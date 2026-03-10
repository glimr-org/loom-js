# Glimr Loom JS ✨

Client runtime for Glimr's Loom template engine, providing WebSocket management, DOM patching, SPA navigation, and event forwarding. This package is meant to be used alongside the `glimr-org/framework` package and the `glimr-org/glimr` starter repository.

If you'd like to stay updated on Glimr's development, Follow [@migueljarias](https://x.com/migueljarias) on X (that's me) for updates.

## About

> **Note:** This repository contains the client-side runtime for Loom. If you want to build an application using Glimr, visit the main [Glimr repository](https://github.com/glimr-org/glimr).

## Features

- **WebSocket Management** - Persistent connection for server-driven reactivity
- **DOM Patching** - Efficient diffing and patching via morphdom
- **SPA Navigation** - Intercepts link clicks for instant page transitions
- **Event Forwarding** - Captures browser events and sends them to the server

## Installation

```sh
npm install glimr-loom
```

Then import it in your `app.ts`:

```ts
import "../css/app.css";
import "glimr-loom";
```

The runtime auto-initializes on page load — no setup required.

## Learn More

- [Glimr](https://github.com/glimr-org/glimr) - Main Glimr repository
- [Glimr Framework](https://github.com/glimr-org/framework) - Core framework

### Built With

- [**morphdom**](https://github.com/patrick-steele-iber/morphdom) - Fast and lightweight DOM diffing/patching

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Glimr Loom JS is open-sourced software licensed under the [MIT](https://opensource.org/license/MIT) license.
