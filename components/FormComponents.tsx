import { Control } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Input } from './ui/input'


type CustomFormFieldProps = {
  name: string
  control: Control<any>
}

export function CustomFormField({
  name,
  control
}: CustomFormFieldProps) {

  return (
    <FormField 
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>
            {name}
          </FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

type CustomFormSelectProps = {
  name: string
  control: Control<any>
  items: string[]
  labelText?: string
}

export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps) {}