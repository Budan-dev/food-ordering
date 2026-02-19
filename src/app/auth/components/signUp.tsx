export default function SignUp() {
  return (
    <form className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Sign Up</h2>

      <input type="email" placeholder="Email" className="border p-2 rounded" />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
      />

      <button className="bg-black text-white py-2 rounded">Sign In</button>
    </form>
  );
}
