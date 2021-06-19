import React from 'react'
import { Layout } from '../components/Layout'
import { EditTaskForm, EditTaskParams } from '../components/EditTaskForm'
import { useParams } from 'react-router-dom'

export const EditTaskPage = () => {
  const { id } = useParams<EditTaskParams>()

  return (
    <Layout title={`Edit Task #${id}`}>
      <EditTaskForm />
    </Layout>
  )
}
