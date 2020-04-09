// @ts-ignore
import { Service, project, IServiceRequest } from "@wasm/studio-utils";

// (async () => {
//   const data = await Service.compileFile(
//     pro
//     project.getFile(".tmp/generated.c"),
//     "c",
//     "wasm",
//     "-g -O3"
//   );
//   const outWasm = project.newFile(".tmp/generated.wasm", "wasm", true);
//   outWasm.setData(data);
// })();

export async function compile(src: string) {
  const result = await Service.compile(src, "c", "wasm", "-g -O3");
  if (!result.success) {
    throw new Error((result as any).message);
  }
  return result;
}
