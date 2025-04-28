export function GET() {
  return Response.json({
    version: process.env.NEXT_PUBLIC_BUILD_ID,
    git: process.env.GIT_HASH,
    success: true,
    cache: false,
  });
}
