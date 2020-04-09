import { runner } from "@/wasm/runner";
import { decodeBinary } from "@/wasm/libs/utils";
import { compile } from "@/wasm/compile";

export async function run(src: string) {
  const base64 = await compile(src);
  const data = await decodeBinary(base64.output);
  runner(data);
}
