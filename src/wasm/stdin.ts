export class Stdin {
  public str: string = "";

  public set(s: string) {
    this.str = s;
  }

  public add(s: string) {
    this.str += s;
  }

  public clear() {
    this.str = "";
  }
}

export const stdin = new Stdin();
