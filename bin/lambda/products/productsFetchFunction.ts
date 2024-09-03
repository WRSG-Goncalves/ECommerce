import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "Implementar este método."
    })
  }
}
