export function GET() {
  return Response.json({
    version: process.env.NEXT_PUBLIC_BUILD_ID,
    success: true,
    cache: false,
  });
}
