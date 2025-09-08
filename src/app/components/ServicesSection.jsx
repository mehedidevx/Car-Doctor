import dbConnect, { collectionObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default async function ServicesSection() {
  const serviceCollection = dbConnect(collectionObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-12  gap-6 py-8 ">
      {data.map((service) => (
        <div
          key={service._id}
          className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative">
            <Image
              src={service.img}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
           
          </div>

          <div className="p-5 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                {service.title}
              </h2>
              <h2 className="text-lg font-bold text-gray-800">
                Price : ${service.price}
              </h2>
            </div>

            <div>
              <Link href={`/services/${service._id}`} className="text-orange-500 cursor-pointer"><FaArrowRight /></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
