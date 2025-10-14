// "use client";

import { loginAction } from "./loginAction";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  //   {
  //   loginAction,
  // }: {
  //   loginAction: (username: string, password: string) => Promise<void>;
  // })

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [isPending, startTransition] = useTransition();
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");

  //   startTransition(async () => {
  //     try {
  //       await loginAction(username, password);
  //       router.push("/admin");
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message || "Login gagal");
  //       } else {
  //         setError("Login gagal: kesalahan tidak dikenal");
  //       }
  //     }
  //   });
  // };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-center text-amber-600">
        Admin Login
      </h1>
      <p className="text-gray-500 text-center mb-6">
        Masuk untuk mengelola Warkop Fatihillah
      </p>

      {/* {error && (
        <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md mb-4 text-sm">
          {error}
        </div>
      )} */}
      <form
        // onSubmit={handleSubmit}
        action={loginAction}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Masukkan username"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Masukkan password"
            required
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
