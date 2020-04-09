import { stdin } from "./stdin";

export interface ImportObject extends WebAssembly.Imports {
  env: {
    __syscall0: Syscall0;
    __syscall1: Syscall1;
    __syscall2: Syscall2;
    __syscall3: Syscall3;
    __syscall4: Syscall4;
    __syscall5: Syscall5;
    __syscall6: Syscall6;
    putc_js: (c: number) => void;
    getc_js: (i: number) => number;
  };
}

export interface Instance extends WebAssembly.Instance {
  exports: {
    readv_c: (arg1: number, arg2: number, arg3: number) => number;
    writev_c: (arg1: number, arg2: number, arg3: number) => number;
    main: () => void;
    memory: WebAssembly.Memory;
  };
}

let memoryStates = new WeakMap();

// ref: n is syscall number,
// * https://syscalls.kernelgrok.com/
// * https://www.informatik.htw-dresden.de/~beck/ASM/syscall_list.html
export function syscall(instance: Instance, n: number, args: number[]): any {
  // console.log("Syscall " + n + " NYI, args: " + args + "\n");
  switch (n) {
    default:
      // console.log("Syscall " + n + " NYI.");
      break;
    case /* brk */ 45:
      return 0;
    case /* readv */ 145:
      // console.log("called 145");
      const input = window.prompt();
      if (input === null) break;
      stdin.add(input);
      return instance.exports.readv_c(args[0], args[1], args[2]);
    case /* writev */ 146:
      // console.log("called 146");
      return instance.exports.writev_c(args[0], args[1], args[2]);
    case /* mmap2 */ 192:
      // debugger;
      const memory = instance.exports.memory;
      let memoryState = memoryStates.get(instance);
      const requested = args[1];
      if (!memoryState) {
        memoryState = {
          object: memory,
          currentPosition: memory.buffer.byteLength
        };
        memoryStates.set(instance, memoryState);
      }
      let cur = memoryState.currentPosition;
      if (cur + requested > memory.buffer.byteLength) {
        const need = Math.ceil(
          (cur + requested - memory.buffer.byteLength) / 65536
        );
        memory.grow(need);
      }
      memoryState.currentPosition += requested;
      return cur;
  }
}

type Repeat<Length extends number, T> = Length extends 0
  ? []
  : [T, ...T[]] & { length: Length };

type SyscallN<N extends number> = (
  n: number,
  ...args: Repeat<N, number>
) => any;

type Syscall0 = SyscallN<0>;
type Syscall1 = SyscallN<1>;
type Syscall2 = SyscallN<2>;
type Syscall3 = SyscallN<3>;
type Syscall4 = SyscallN<4>;
type Syscall5 = SyscallN<5>;
type Syscall6 = SyscallN<6>;
