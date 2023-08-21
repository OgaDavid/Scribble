"use client";

import { CreateCommunity } from "@/components/Modals/CreateCommunity";

import { useState, useEffect } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
    <CreateCommunity />
    </>
  )
};
