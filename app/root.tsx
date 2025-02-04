import { HeroUIProvider } from '@heroui/react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import './tailwind.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HeroUIProvider locale="en-GB">
          {children}
          <ScrollRestoration />
          <Scripts />
        </HeroUIProvider>
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
