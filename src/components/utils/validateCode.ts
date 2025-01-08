export function validateCode(code: string, regex: RegExp): boolean {
  if (regex.test(code)) {
    return true;
  } else {
    return false;
  }
}
