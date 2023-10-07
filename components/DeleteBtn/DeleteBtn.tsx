'use client'
import { Button } from "../ui/button";

export default function DeleteBtn({ id }: { id: number }) {

  const handleDelete = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/DeleteProduct/${id}`, {
        method: "DELETE", // Assuming DELETE is the correct HTTP method for deletion
 
      });
          
      if (!response.ok) {
        // Handle non-successful response (e.g., show an error message)
        console.error("Failed to delete product");
      } else {
        console.log("Product deleted successfully");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred while deleting the product", error);
    }
  };

  return (
    <div>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}
