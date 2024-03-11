# deno_module_server

Hosts Deno modules bundled for the web.

## Example

> [!IMPORTANT]
>
> The example below is not working due to current limitations of the Deno Deploy
> runtime. See
> [#1](https://github.com/EthanThatOneKid/deno_module_server/issues/1).

```ts
import { parse } from "http://module-server.deno.dev/?specifier=https://deno.land/x/boolean/mod.ts";

console.log(parse("true"));
```

---

Developed with [🦕](https://deno.land/) by
[**@EthanThatOneKid**](https://etok.codes/)
