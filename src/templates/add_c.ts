export const addCRaw = String.raw`#include <sys/uio.h>
#define WASM_EXPORT __attribute__((visibility("default")))

#include <stdio.h>

int add(int a, int b)
{
  return a + b;
}

WASM_EXPORT
int main()
{
  int a = 0;
  int b = 0;
  scanf("%d", &a);
  scanf("%d", &b);
  printf("%d + %d = %d\n", a, b, add(a, b));
  return 0;
}

extern void putc_js(char ch);

WASM_EXPORT
size_t writev_c(int fd, const struct iovec *iov, int iovcnt)
{
  size_t cnt = 0;
  for (int i = 0; i < iovcnt; i++)
  {
    for (int j = 0; j < iov[i].iov_len; j++)
    {
      putc_js(((char *)iov[i].iov_base)[j]);
    }
    cnt += iov[i].iov_len;
  }
  return cnt;
}

extern char getc_js(int index);

WASM_EXPORT
size_t readv_c(int fd, const struct iovec *iov, int iovcnt)
{
  size_t cnt = 0;
  for (int i = 0; i < iovcnt; i++)
  {
    for (int j = 0; j < iov[i].iov_len; j++)
    {
      char s = getc_js(j);
      ((char *)iov[i].iov_base)[j] = s;
      if (s != 0) cnt++;
    }
  }
  return cnt;
}
`;

// export const addCRaw = String.raw`#include <stdio.h>

// int add(int a, int b)
// {
//   return a + b;
// }

// int main()
// {
//   int a = 0;
//   int b = 0;
//   scanf("%d", &a);
//   scanf("%d", &b);
//   printf("%d + %d = %d\n", a, b, add(a, b));
//   return 0;
// }`;
