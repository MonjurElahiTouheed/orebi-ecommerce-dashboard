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
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from 'axios';

const CreateSubCategory = () => {
  const [categories, setCategories] = useState([]);
  // const [category, setCategory] = useState('');
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
  }, []);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    try {
      axios.post('http://localhost:3000/api/v1/subcategory/createsubcategory', data)
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-md ml-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Update sub category Name
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Sub category name"
              {...register('name',
                {
                  required: 'Sub category name is required'
                }
              )}
            />
            {errors.name && <p className="text-red-500 font-medium">{errors.name.message}</p>}
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Update Sub category Description
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Sub category description"
              {...register('description',
                {
                  required: 'Category description is required'
                }
              )}
            />
            {errors.description && <p className="text-red-500 font-medium">{errors.description.message}</p>}
          </Field>
          <Field>
            <FieldLabel htmlFor="Category">
              Select Category
            </FieldLabel>
            <Select defaultValue="" onValueChange={(value) => setValue("category",value)}>
              <SelectTrigger id="checkout-exp-month-ts6">
                <SelectValue placeholder="Category name" />
              </SelectTrigger>
              <SelectContent>
                {
                  categories.map(category => <SelectItem value={category._id}>{category.name}</SelectItem>)
                }
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
        <div className="mt-5">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>

  )
}

export default CreateSubCategory
