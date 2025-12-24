import Link from 'next/link'; 

const ServiceCard = ({ service }) => {
  const { _id, title, short_description, price, icon, rating, category } = service;

  return (
    <div className="card bg-base-100 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group">
      <div className="card-body p-6">
        {/* Category Badge & Rating */}
        <div className="flex justify-between items-center mb-3">
          <span className="badge badge-ghost text-xs uppercase font-bold tracking-wider">{category}</span>
          <div className="flex items-center text-yellow-500 text-sm">
            <span>⭐ {rating}</span>
          </div>
        </div>

        {/* Icon & Title */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="card-title text-xl font-bold text-gray-800">{title}</h3>
        
        <p className="text-sm text-gray-500 line-clamp-2 my-2">
          {short_description}
        </p>

        {/* Price Tag */}
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary">৳{price}</span>
          <span className="text-gray-400 text-xs">/ service unit</span>
        </div>

        {/* Action Button */}
        <div className="card-actions mt-6">
          <Link href={`/services/${_id}`} className="w-full">
            <button className="btn btn-primary btn-outline group-hover:btn-active w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;