import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if(!session) {
    return (
      <div className="bg-purple-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 rounded-lg">Login with Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-purple-900 min-h-screen">
      <div>logged in {session.user.email}</div>
    </div>
  )
}
