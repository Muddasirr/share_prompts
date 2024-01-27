'use client'
import React from 'react'
import Form from '@/components/Form'
import { useState } from 'react'
import {useSession} from 'next-auth/client'
import { UseRouter } from 'next/navigation'
const CreatePrompt = () => {
    const[submitting, setSubmitting] = useState(false)
const [post,setPost] = useState('')





  return (
<Form/>  )
}

export default CreatePrompt