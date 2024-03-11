# deno_module_server

Hosts Deno modules bundled for the web.

## Example

```ts
import { parse } from "http://module-server.deno.dev/?specifier=https://deno.land/x/boolean/mod.ts";

console.log(parse("true"));
```

---

Developed with [🦕](https://deno.land/) by
[**@EthanThatOneKid**](https://etok.codes/)
