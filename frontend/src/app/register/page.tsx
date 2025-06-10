"use client";
import { passwordRule, userNameRule } from "@/components/Form/rule";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerEffect, RegisterProps } from "@/effector/effector";
import { useRegisterEffect } from "@/hooks/useRegisterEffect";
import useSignedGuard from "@/hooks/useSignedGuard";
import { useUnit } from "effector-react";
import Image from "next/image";
import Link from "next/link";
import { mergeRight, path } from "ramda";
import { useForm } from "react-hook-form";
export default function Home() {
  const { handel } = useRegisterEffect();
  const loginPending = useUnit(registerEffect.pending);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterProps>();
  useSignedGuard();

  const password = watch("password");
  return (
    <form onSubmit={handleSubmit(handel)} className="space-y-4 p-4 h-full">
      <div className="h-full w-[93%] m-auto flex flex-col items-baseline justify-around">
        <div className="w-full pt-24">
          <div className="w-[80%] m-auto relative h-11">
            <Image
              src={"/images/mgonetwork.png"}
              fill
              className="object-contain"
              alt={""}
            />
          </div>
          <p className="text-xl text-center mt-2 text-[var(--t-main)]">
            Deposit and Withdrawal DEMO
          </p>
        </div>

        <div className="w-full">
          <p className="text-xl text-center mb-7 text-white">Register</p>

          <div className="flex flex-col gap-4 m-auto">
            <Input
              label="username"
              {...register("username", userNameRule)}
              error={path(["username", "message"], errors)}
              placeholder="Please enter"
            />
            <Input
              label="Set password"
              {...register("password", passwordRule)}
              error={path(["password", "message"], errors)}
              placeholder="Please enter"
              type="password"
            />
            <Input
              label="Confirm password"
              {...register(
                "rePassword",
                mergeRight(passwordRule, {
                  validate: (value: string) =>
                    value === password ||
                    "The passwords entered twice do not match",
                })
              )}
              error={path(["rePassword", "message"], errors)}
              placeholder="Please enter"
              type="password"
            />
          </div>
        </div>

        <div className="w-full">
          <Button
            isLoading={loginPending}
            type="submit"
            className="bg-[var(--t-main)] w-full"
          >
            Register now
          </Button>
          <h4 className="text-white text-xs text-center mt-4 flex items-center justify-center gap-0.5">
            <span>Already registered?</span>
            <Link className="text-[var(--t-main)]" href={"login"}>
              Go to login
            </Link>
          </h4>
        </div>
      </div>
    </form>
  );
}
