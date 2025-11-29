import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios';
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const UpdateSubCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const {id} = useParams();
  console.log(id)

  const fetchACategory = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/v1/subcategory/getsinglesubcategory/${id}`);
      setSubCategory(data.data);
      console.log(data.data)
    } catch (error) {
      console.log(error);
    }
  }
const fetchCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/v1/category/getallcategories');
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchACategory();
    fetchCategories();
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    try {
    axios.patch(`http://localhost:3000/api/v1/subcategory/updatesinglesubcategory/${id}`, subCategory);
    console.log(subCategory)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-md ml-5">
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Category Name
            </FieldLabel>
            <Input
              id="name"
              placeholder="Category name"
              value={subCategory?.name}
              onChange={(e) => setSubCategory({...subCategory, name:e.target.value})}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Category Description
            </FieldLabel>
            <Input
              id="description"
              placeholder="Category description"
              value={subCategory?.description}
              onChange={(e) => setSubCategory({...subCategory, description: e.target.value})}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="Category">
              Select Category
            </FieldLabel>
            <Select defaultValue="" onValueChange={(value) => setSubCategory({...subCategory, category: value})}>
              <SelectTrigger id="checkout-exp-month-ts6">
                <SelectValue placeholder="Category name" />
              </SelectTrigger>
              <SelectContent>
                {
                  categories.map(category => <SelectItem value={category?._id}>{category.name}</SelectItem>)
                }
              </SelectContent>
            </Select>
          </Field>


        </FieldGroup>
        <div className="mt-5">
          <Button onClick={handleUpdate} type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default UpdateSubCategory
