import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const bookingCollection = dbConnect(collectionObj.bookingCollection);
  const p = await params;
  const query = { _id: new ObjectId(p.id) };
  // validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);
  const isOwnerOk = session?.user?.email == currentBooking?.email;
  if (isOwnerOk) {
    const result = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings")
    return NextResponse.json(result);
  }else{
    return NextResponse.json({ message: "You are not authorized to delete this booking." }, { status: 403 } )
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const servicesCollection = dbConnect(collectionObj.servicesCollection);
  const service = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return NextResponse.json(service);
};
