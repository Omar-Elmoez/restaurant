type ValidationResponse = {
  message: string,
  errors: {
    [key: string]: string
  }
}

export default ValidationResponse