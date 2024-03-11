import { build, type Format } from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";

if (import.meta.main) {
  Deno.serve(handle);
}

async function handle(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname !== "/" && request.method !== "GET") {
    return new Response("Not found", { status: 404 });
  }

  const specifier = url.searchParams.get("specifier");
  if (!specifier) {
    return new Response("Missing specifier", { status: 400 });
  }

  const format = (url.searchParams.get("format") || "esm") as Format;
  const result = await build({
    entryPoints: [specifier],
    bundle: true,
    format,
    plugins: [...denoPlugins()],
    write: false,
  });
  const code = result.outputFiles
    .find((file: Record<PropertyKey, unknown>) => file.path === "<stdout>");
  if (!code) {
    return new Response("No output", { status: 500 });
  }

  return new Response(code.text, {
    headers: {
      "content-type": "application/javascript",
    },
  });
}
