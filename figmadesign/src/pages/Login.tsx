// src/pages/Login.tsx
import React from "react";
import FormInput from "../shared/components/molecules/FormInput";
import BasicCheckbox from "../shared/components/atoms/BasicCheckbox";
import BasicButton from "../shared/components/atoms/BasicButton";

const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [touched, setTouched] = React.useState<{ user?: boolean; pass?: boolean }>({});
  const [submitted, setSubmitted] = React.useState(false);

  const userError =
    (submitted || touched.user) && !username ? "Please enter your username." : "";
  const passError =
    (submitted || touched.pass) && !password ? "Please enter your password." : "";

  const canSubmit = username.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!canSubmit) return;
    // Static-only: no server. You can navigate after “success” in your router.
    alert(`Logged in as ${username} (remember=${remember})`);
  };

  return (
    <div className="min-h-screen w-full grid place-items-center bg-gray-50 p-4">
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Brand */}
        <div className="text-center mb-6">
          <div className="text-3xl font-extrabold text-yellow-500 tracking-wide">LANDAS</div>
          <p className="text-gray-500 mt-1 text-sm">Welcome back. Please sign in.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            id="username"
            label="Username"
            value={username}
            onChange={setUsername}   // ✅ works because FormInput is typed to accept string setter
            placeholder="Enter your username"
            error={userError}
            autoComplete="username"
            onBlur={() => setTouched((t) => ({ ...t, user: true }))}
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}   // ✅ same here
            placeholder="Enter your password"
            error={passError}
            autoComplete="current-password"
            onBlur={() => setTouched((t) => ({ ...t, pass: true }))}
          />

          {/* Remember + Links */}
          <div className="flex items-center justify-between">
            <BasicCheckbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              label="Remember me"
            />
            <div className="text-sm">
              <a href="#" className="text-gray-600 hover:text-black underline underline-offset-4">
                Forgot Username
              </a>
              <span className="mx-2 text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-black underline underline-offset-4">
                Forgot Password
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-2">
            <BasicButton type="submit" fullWidth disabled={!canSubmit}>
              Login
            </BasicButton>
            <BasicButton variant="outline" fullWidth>
              Sign Up
            </BasicButton>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} LANDAS. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
