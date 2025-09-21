"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";

export default function Upgrade() {
  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "3ca4553c-f182-49f6-a298-18a2a4024069",
        "f17b2da7-5cef-4591-afac-49eabc2075c9",
        "e82eacfe-f5b0-4c97-a86f-71a54b8f4f71",
      ],
    });
  };
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-2 cursor-pointer text-orange-400"
      onClick={upgrade}
    >
      Upgrade
    </Button>
  );
}