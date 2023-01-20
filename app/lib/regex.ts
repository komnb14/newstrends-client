export function isValidPassword(password: string) {
  const passwordRules = [/[a-zA-Z]/, /[0-9]/, /[^A-Za-z0-9]/];
  if (password.length < 8) return false;
  const counter = passwordRules.reduce((acc, reg) => {
    if (reg.test(password)) {
      acc += 1;
    }
    return acc;
  }, 0);
  return counter > 1;
}
