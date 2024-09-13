import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/user'>Go to User Page</Link>
    </div>
  )
}
