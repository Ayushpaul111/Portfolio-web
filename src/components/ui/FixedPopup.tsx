"use client";
import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
export function FixedPopup() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("floatingButton", {
        calLink: "ayush-paul/15min",
        buttonTextColor: "#f5f5f5",
        buttonText: "Let's Chat",
      });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return <div></div>;
}
