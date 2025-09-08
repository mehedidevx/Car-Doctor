import CheckOutForm from "@/components/CheckOutForm";
import React from "react";

export default async function CheckoutPage({ params }) {
    const awaitedParams = await params;  
  const { id } = awaitedParams;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/service/${id}`
  );
  const data = await res.json();
  return <div>
    <CheckOutForm data={data}></CheckOutForm>
  </div>;
}
