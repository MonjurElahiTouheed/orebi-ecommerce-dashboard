import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useEffect, useState } from "react"

//  

const AllProducts = () => {
  const [categories, setCategories] = useState([])
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/v1/category/getallcategories');
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  const handleDelete = async(id) => {
    console.log(id)
    await axios.delete(`http://localhost:3000/api/v1/category/deletesinglecategory/${id}`);
    fetchCategories();
  }

console.log(categories)
  return (
    <div className="mx-10 shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>
                <Button className="mr-3">Edit</Button>
                <Button className="bg-red-500">Delete</Button>
              </TableCell>
            </TableRow>
          ))} */}
          {categories.map((category, index) => (
            <TableRow key={category._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>
                <Button className="mr-3">Edit</Button>
                <Button onClick={() => handleDelete(category._id)} className="bg-red-500">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  )
}

export default AllProducts
