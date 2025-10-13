import { Control } from 'react-hook-form'
import { FormField } from './ui/form'


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
      render={({ field }) => ()}
    />
  )
}