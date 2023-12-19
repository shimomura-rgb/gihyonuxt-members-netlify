export default defineEventHandler(
  (event) => {
    console.log(`リクエスト情報: ${event.node.req.url}`);
  }
);