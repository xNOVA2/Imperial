import { categories } from "@/components/Categories";
import Link from "next/link";

export default function ComapanyBar() {
  return (
    <nav className="mt-5 items-start rounded-md bg-gray-100 p-2 md:hidden lg:flex hidden m-3">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {categories.map((category, index) => (
          <li key={index} className="inline-flex items-center">
            <Link
            prefetch
              href={`/Products/${encodeURIComponent(category.link)}`}
              className={`ml-${index === 0 ? '1' : '2.5'} text-xs font-medium text-gray-800 hover:text-blue-400 cursor-pointer md:ml-2`}
            >
              {category.name}
            </Link>
            {index < categories.length - 1 && (
              <div className="flex items-center">
                <span className="mx-2.5 text-gray-800">/</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
