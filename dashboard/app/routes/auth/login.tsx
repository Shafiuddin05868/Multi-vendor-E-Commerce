import { Chrome, Facebook, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle registration logic here
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Login to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center border rounded-md">
                <Mail className="ml-2 h-4 w-4 text-gray-500" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="border-none focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="flex items-center border rounded-md">
                <Lock className="ml-2 h-4 w-4 text-gray-500" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="border-none focus-visible:ring-0"
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <p className="text-muted-foreground">Do not have any account?</p>
            <Link
              to="/auth/register"
              className="font-medium text-primary hover:underline"
            >
              Sign Up
            </Link>
          </div>

          <Separator className="my-6" />

          <div className="space-y-3">
            <Button
              variant="outline"
              size="lg"
              className="w-full flex items-center gap-2"
            >
              <FcGoogle className="h-5 w-5" />
              <span>Continue with Google</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full flex items-center gap-2"
            >
              <FaFacebook className="h-5 w-5 text-[#1877F2]" />
              <span>Continue with Facebook</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
