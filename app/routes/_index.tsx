import type { MetaFunction } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-3">
          <Link to="/edit">Edit Page in Modal</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}
