import type { LoaderArgs, LoaderFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import GlobalStyle from '~/components/GlobalStyle';
import { getMyAccount, type User } from '~/lib/api/auth';
import { setClientCookie } from '~/lib/client';
import { useLoaderData } from 'react-router';
import { extractError } from '~/lib/error';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  try {
    const cookie = request.headers.get('Cookie');
    if (!cookie) return null;
    setClientCookie(cookie);
    const me = await getMyAccount();
    return me;
  } catch (e) {
    const error = extractError(e);
    if (error.name === 'UnAuthorizedError') {
      console.log(error.payload);
    }
  }

  return null;
};

export default function App() {
  const data = useLoaderData() as User | null;
  console.log(data);
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalStyle />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
