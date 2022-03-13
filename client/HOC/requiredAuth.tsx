import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useAppSelector } from "../hooks/useTypedSelector";

export function requireAuth(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { req, res } = ctx;
    
    if (!username) {
      return {
        redirect: {
          destination: "/admin",
          statusCode: 302,
        },
      };
    }

    return await gssp(ctx); // Continue on to call `getServerSideProps` logic
  };
}
