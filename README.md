# Svelte starter

Svelte starter POC with router, nested routes, route change hooks, private routes, authentication and http using fetch api.

### Development
Requires Node.js 8.4.0+ 

```bash
npm i
npm run serve
```


Open [http://localhost:8001](http://localhost:8001)

### Authentication

Update the /src/config/config.js with your own api settings.


### Router
* [abstract-state-router](https://github.com/TehShrike/abstract-state-router)
* [svelte-state-renderer](https://github.com/TehShrike/svelte-state-renderer)

 
### IDE Support
WebStorm IDE has some quirks with Svelte handlebar syntax. To fix update these settings:
* Preferences > Disable XML in inspections
* Preferences > Disable Unknown html tag attribute