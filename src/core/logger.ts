const error = (str: string) => {
  console.log(`\x1b[31m${str}\x1b[0m`)
}

const info = (str: string) => {
  console.log(`\u001b[34m${str}\x1b[0m`)
}

export const logger = {
  error,
  info,
}
