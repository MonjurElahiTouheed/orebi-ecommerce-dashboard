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
import { Link } from "react-router";

const AllSubCategories = () => {
    const [subCategories, setSubCategories] = useState([])
  const fetchSubCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/v1/subcategory/getallsubcategory');
      setSubCategories(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSubCategories();
  }, [])

  const handleDelete = async (id) => {
    console.log(id)
    await axios.delete(`http://localhost:3000/api/v1/subcategory/deletesinglesubcategory/${id}`);
    fetchSubCategories();
  }
    return (
        <div className="mx-10 shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Serial No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subCategories.map((subCategory, index) => (
            <TableRow key={subCategory._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{subCategory.name}</TableCell>
              <TableCell>{subCategory.description}</TableCell>
              <TableCell>{subCategory.category?.name}</TableCell>
              <TableCell>
                <Link to={`/update-sub-category/${subCategory._id}`}>
                  <Button className="mr-3">Edit</Button>
                </Link>
                <Button onClick={() => handleDelete(subCategory._id)} className="bg-red-500">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    );
};

export default AllSubCategories;