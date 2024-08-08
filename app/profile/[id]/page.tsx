import Profile from "@/components/Profile/Profile";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Profile params={{ id: params.id }} />
    </div>
  );
}
