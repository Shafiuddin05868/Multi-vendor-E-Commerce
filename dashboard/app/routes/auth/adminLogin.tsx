import { Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { adminLogin } from "~/store/Reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "~/store";
import { LoadingText } from "~/components/loaders/GlobalLodaders";

const AdminLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loader } = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(adminLogin(form));
    // handle registration logic here
    // console.log(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <img
            className="mx-auto"
            style={{ height: "100px" }}
            src="/images/logo.png"
            alt="VendorVerse logo"
          />
          <CardTitle className="text-center text-2xl font-bold">
            VendorVerse
          </CardTitle>
          <CardDescription className="text-center">
            Your MarketPlace, Endless Choises
          </CardDescription>
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

            <Button aria-disabled={loader} type="submit" className="w-full mt-4">
              {loader ? <LoadingText /> : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
