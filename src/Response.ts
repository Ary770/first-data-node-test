interface Response {
    statusCode: number, 
    data:  { 
      firstName: string, 
      lastName: string, 
      clientId: string
    }
}

export default Response;
