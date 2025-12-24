// import { useRouter } from 'next/router'; 
import Link from 'next/link';
import { getSingleServices } from '@/actions/server/services';
import BookServiceBtn from '@/components/buttons/BookServiceBtn';

// export async function generateMetadata({ params }) {
//   const { id } = await params;
//   const service = await getSingleServices(id);

//   if (!service) {
//     return {
//       title: "Service Not Found | Care.IO",
//       description: "The requested care service could not be found.",
//     };
//   }

//   const shortDescription =
//     service.detailed_description?.slice(0, 160) ||
//     "Book trusted baby sitting, elderly care, and home care services easily and safely with Care.IO.";

//   const imageUrl =
//     service.image ||
//     "https://i.ibb.co.com/Kzb2tzRv/Screenshot-2025-12-22-232710.png";

//   return {
//     title: `${service.title} | Care.IO`,
//     description: shortDescription,

//     openGraph: {
//       title: `${service.title} | Trusted Care Services`,
//       description: shortDescription,
//       type: "website",
//       images: [
//         {
//           url: imageUrl,
//           width: 1200,
//           height: 630,
//           alt: service.title,
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: `${service.title} | Care.IO`,
//       description: shortDescription,
//       images: [imageUrl],
//     },
//   };
// }

const ServiceDetailsPage =async ({ params }) => {
  const { id } = await params;
  const service = await getSingleServices(id);
  if (!service) return <div className="text-center py-20">Service Not Found!</div>;

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Details (2/3 width) */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{service.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{service.title}</h1>
              <div className="badge badge-primary mt-2">{service.category} care</div>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {service.detailed_description}
          </p>

          {/* Features Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              ✅ Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 bg-blue-50 p-3 rounded-lg text-gray-700">
                  <span className="text-blue-500 font-bold">•</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements Section */}
          <div className="mb-8 bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400">
            <h3 className="text-xl font-semibold mb-3 text-orange-800">📋 Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {service.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Sticky Booking Card (1/3 width) */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl border sticky top-24">
            <div className="card-body">
              <h3 className="text-xl font-bold border-b pb-4">Booking Summary</h3>
              
              <div className="flex justify-between items-center py-4">
                <span className="text-gray-500">Service Charge</span>
                <span className="text-2xl font-bold text-primary">৳{service.price}</span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Rating:</span>
                  <span className="font-semibold text-yellow-600">⭐ {service.rating} / 5.0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Availability:</span>
                  <span className="font-semibold text-green-600">Available Now</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Duration:</span>
                  <span className="font-semibold">{service.service_duration}</span>
                </div>
              </div>

              <BookServiceBtn service={ service} />

              <p className="text-xs text-center text-gray-400 mt-4">
                * Taxes and additional costs calculated at checkout
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailsPage;









// import { getSingleServices } from "@/actions/server/services";
// import BookingSidebar from "@/components/services/BookingSidebar";


// export async function generateMetadata({ params }) {
//   const { id } = await params;
//   const service = await getSingleServices(id);

//   if (!service) {
//     return {
//       title: "Service Not Found | Care.IO",
//       description: "The requested care service could not be found.",
//     };
//   }

//   const shortDescription =
//     service.detailed_description?.slice(0, 160) ||
//     "Book trusted baby sitting, elderly care, and home care services easily and safely with Care.IO.";

//   const imageUrl =
//     service.image ||
//     "https://i.ibb.co.com/Kzb2tzRv/Screenshot-2025-12-22-232710.png";

//   return {
//     title: `${service.title} | Care.IO`,
//     description: shortDescription,

//     openGraph: {
//       title: `${service.title} | Trusted Care Services`,
//       description: shortDescription,
//       type: "website",
//       images: [
//         {
//           url: imageUrl,
//           width: 1200,
//           height: 630,
//           alt: service.title,
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: `${service.title} | Care.IO`,
//       description: shortDescription,
//       images: [imageUrl],
//     },
//   };
// }

// const ServiceDetailsPage = async ({ params }) => {
//   const { id } = params;
//   const service = await getSingleServices(id);

//   if (!service) {
//     return <div className="text-center py-20">Service Not Found!</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-10 max-w-6xl">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* LEFT — Server Rendered */}
//         <div className="lg:col-span-2">
//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-6xl">{service.icon}</span>
//             <div>
//               <h1 className="text-4xl font-bold text-gray-800">
//                 {service.title}
//               </h1>
//               <div className="badge badge-primary mt-2">
//                 {service.category} care
//               </div>
//             </div>
//           </div>

//           <p className="text-lg text-gray-600 leading-relaxed mb-8">
//             {service.detailed_description}
//           </p>

//           <h3 className="text-2xl font-semibold mb-4">✅ Key Features</h3>
//           <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
//             {service.features.map((feature, i) => (
//               <li key={i} className="bg-blue-50 p-3 rounded-lg">
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT — Client Component */}
//         <BookingSidebar service={service} />

//       </div>
//     </div>
//   );
// };

// export default ServiceDetailsPage;
