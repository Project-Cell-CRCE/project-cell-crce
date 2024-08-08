"use client";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Profile = ({ params }: { params: { id: string } }) => {
  interface UserData {
    name: string;
    avatarUrl: string;
    score: number;
    email: string;
  }
  const [userInfo, setUserInfo] = useState<UserData | undefined>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userRef = doc(db, "users", params.id);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          const data = userSnapshot.data() as UserData;
          setUserInfo(data);
          console.log(data);
        }
      } catch (err: any) {
        console.error("Error fetching document:", err.message);
      }
      setLoading(false);
    };
    fetchUserData();
  }, [params.id]);
  return (
    <div>
      {loading ? (
        <div>Hi</div>
      ) : (
        <div>
          <Image
            src={userInfo?.avatarUrl ? userInfo.avatarUrl : "/logo.png"}
            className="rounded-full"
            height={25}
            width={25}
            alt="profile picture"
          />
          Name : {userInfo?.name} <br />
          Email : {userInfo?.email} <br />
          Score : {userInfo?.score}
          <br />
        </div>
      )}
    </div>
  );
};

export default Profile;
