'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { JobStatus, JobMode, createAndEditJobSchema, CreateAndEditJobType } from '@/utils/types'
import { CustomFormField, CustomFormSelect } from './FormComponents'

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
        <h2 className='capitalize font-medium text-4xl mb-6'>Add Job</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
          <CustomFormField
            name='position'
            control={form.control}
          />
          <CustomFormField
            name='company'
            control={form.control}
          />
          <CustomFormField
            name='location'
            control={form.control}
          />
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
        </div>
      </form>
    </Form>
  )
}

export default CreateJobForm