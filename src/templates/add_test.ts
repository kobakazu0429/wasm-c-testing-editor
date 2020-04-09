const addFunc = "const add = (a, b) => `${a} + ${b} = ${a + b}`;";

export const addTestRaw = String.raw`${addFunc}

describe("add", () => {
  test("1 + 2 = 3", () => {
      expect(add(1, 2)).toBe("1 + 2 = 3");
  });

  test("-5 + 3 = -2", ()=> {
    expect(add(-5, 3)).toBe("-5 + 3 = -2");
  });
});`;

// export const addTestRaw = String.raw`import {describe, it, expect, run} from "jest-lite";
// import { main } from "../bin/start";
// import * as rs from "readline-sync";
// jest.mock("readline-sync");

// const spyLog = jest.spyOn(console, "log");
// spyLog.mockImplementation(_x => undefined);

// describe("add", () => {
//   afterEach(() => {
//     spyLog.mockClear();
//   });
//   afterAll(() => {
//     spyLog.mockReset();
//     spyLog.mockRestore();
//   });

//   test("1 + 2 = 3", async done => {
//     jest
//       .spyOn(rs, "prompt")
//       .mockReturnValueOnce("1")
//       .mockReturnValueOnce("2");

//     return main().then(() => {
//       expect(spyLog.mock.calls[0][0]).toBe("1 + 2 = 3");
//       expect(console.log).toBeCalled();
//       done();
//     });
//   });

//   test("-5 + 3 = -2", async done => {
//     jest
//       .spyOn(rs, "prompt")
//       .mockReturnValueOnce("-5")
//       .mockReturnValueOnce("3");

//     return main().then(() => {
//       expect(spyLog.mock.calls[0][0]).toBe("-5 + 3 = -2");
//       expect(console.log).toBeCalled();
//       done();
//     });
//   });
// });`;
