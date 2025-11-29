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

const createProduct = () => {
  const [formData, setFromData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    quantity: "",
    image: null
  })
  return (
    <div className="w-full max-w-md ml-5">
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Update sub category Name
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Sub category name"
              
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Update Sub category Description
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Sub category description"
              
            />
            
          </Field>
          <Field>
            <FieldLabel htmlFor="Category">
              Select Category
            </FieldLabel>
            <Select defaultValue="">
              <SelectTrigger id="checkout-exp-month-ts6">
                <SelectValue placeholder="Category name" />
              </SelectTrigger>
              <SelectContent>
                {/* {
                  categories.map(category => <SelectItem value={category._id}>{category.name}</SelectItem>)
                } */}
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

export default createProduct
