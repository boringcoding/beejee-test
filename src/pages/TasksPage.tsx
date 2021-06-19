import React from 'react'
import { Layout } from '../components/Layout'
import { TasksList } from '../components/TasksList'
import { Pagination } from '../components/Pagination'

export const TasksPage = () => {
  return (
    <Layout title="Tasks Manager">
      <TasksList />
      <Pagination />
    </Layout>
  )
}
