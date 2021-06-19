export class ErrorMessage {
	[key: string]: string
}

export class ApiError extends Error {
  constructor(message: string, public data: ErrorMessage) {
    super(message)
    this.name = 'ApiError'
  }
}
