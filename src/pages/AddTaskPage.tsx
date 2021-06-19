import React from 'react'
import { Layout } from '../components/Layout'
import { NewTaskForm } from '../components/NewTaskForm'

export const AddTaskPage = () => {
  return (
    <Layout title="New Task">
      <NewTaskForm />
    </Layout>
  )
}
