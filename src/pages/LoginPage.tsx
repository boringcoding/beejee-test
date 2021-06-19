import React from 'react'
import { Layout } from '../components/Layout'
import { LoginForm } from '../components/LoginForm'

export const LoginPage = () => {
  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  )
}
