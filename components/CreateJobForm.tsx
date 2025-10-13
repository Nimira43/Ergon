'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { JobStatus, JobMode, createAndEditJobSchema, CreateAndEditJobType } from '@/utils/types'
import { CustomFormField, CustomFormSelect } from './FormComponents'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: '',
      company: '',
      location: '',
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  })

  function onSubmit(values: CreateAndEditJobType) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'
      >
        <CustomFormSelect
          control={form.control}
          name='status'
          labelText='Job Status'
          items={Object.values(JobStatus)}
        />
        <CustomFormSelect
          control={form.control}
          name='mode'
          labelText='Job Mode'
          items={Object.values(JobMode)}
        />   
        <Button type='submit'>Create Job</Button>
      </form>
    </Form>
  )
}

export default CreateJobForm