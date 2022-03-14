import { GetServerSideProps, GetServerSidePropsContext } from "next";

export function requireAuth(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { req, res } = ctx;

    // if (req.headers) {
      const username = req.headers;
      console.log(username);

      if (!username) {
        return {
          redirect: {
            destination: "/admin",
            statusCode: 302,
          },
        };
      }
    // }

    return await gssp(ctx); // Continue on to call `getServerSideProps` logic
  };
}
