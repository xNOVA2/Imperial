'use client'
import { Search } from "lucide-react";
import { useRouter,usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export default function SearchBox() {

  const [Text, setText] = useState('')
  const [delayedText, setDelayedText] = useState(Text);

  const pathname = usePathname();
  const router = useRouter()
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name:string, value:string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    let delayTimer:any; // Declare the timer variable within the effect

    // Clear the previous timeout if it exists
    if (delayTimer) {
      clearTimeout(delayTimer);
    }

    if (Text) {
      // Set a new timeout to update the query parameter after a delay
      delayTimer = setTimeout(() => {
        
        const queryString = createQueryString('Search', delayedText); // Use delayedText here
        router.push(pathname + '?' + queryString);
      }, 1000); // Adjust the delay time as needed (e.g., 1000 milliseconds for a 1-second delay)

      // Store the current Text in delayedText
      setDelayedText(Text);
    } else {
      // If Text is empty, remove the query parameter after a delay
      delayTimer = setTimeout(() => {
       
        router.replace(pathname); // Replace the current URL without query parameter
        setDelayedText(''); // Clear delayedText after removing the query parameter
      }, 1000); // Adjust the delay time as needed
    }

    // Cleanup the timeout when the component unmounts
    return () => {
      if (delayTimer) {
        clearTimeout(delayTimer);
      }
    };
  }, [Text, router, delayedText]);

  
    return (
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search/>
          </div>
          <input
          onChange={(e)=>setText(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" // Add 'outline-none' class here
            placeholder="Search LED,AC,COOLER..."
            required
          />
          
        </div>
      </form>
    );
  }
  