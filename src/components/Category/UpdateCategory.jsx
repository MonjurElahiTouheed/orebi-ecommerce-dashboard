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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
import axios from 'axios';
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const UpdateCategory = () => {
  const [category, setCategory] = useState([])
  const {id} = useParams();
  console.log(id)

  const fetchACategory = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/v1/category/getsinglecategory/${id}`);
      setCategory(data.data);
      console.log(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchACategory();
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();
    try {
    axios.patch(`http://localhost:3000/api/v1/category/updatesinglecategory/${id}`, category);
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
              value={category.name}
              onChange={(e) => setCategory({...category, name:e.target.value})}
            />
          </Field>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Category Description
            </FieldLabel>
            <Input
              id="description"
              placeholder="Category description"
              value={category.description}
              onChange={(e) => setCategory({...category, description: e.target.value})}
            />
          </Field>
        </FieldGroup>
        <div className="mt-5">
          <Button onClick={handleUpdate} type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default UpdateCategory
