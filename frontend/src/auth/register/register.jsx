'use client'

import { useState, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router'

const Register = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:8000/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        let errorMessage = 'Registration failed'
        try {
          const errorData = await response.json()
          errorMessage = errorData.message || errorMessage
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError)
        }
        throw new Error(errorMessage)
      }

      const data = await response.json()
      console.log('Registration successful:', data)
      toast({
        title: "Registration Successful",
        description: "Your account has been created.",
      })
      navigate("/login  ")
    } catch (error) {
      console.error('Registration error:', error)
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "There was a problem creating your account.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-no-repeat bg-cover text-gray-900 flex justify-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/table-with-plate-mug_23-2147680122.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid")',
      }}>
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 rounded-l-lg bg-indigo-100 text-center hidden lg:flex">
          <div
            className="rounded-l-lg bg-center w-full bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-vector/telecommuting-concept-with-man-home_23-2148488959.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid")',
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold mb-6">Sign up</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your Full Name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>


              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  <>
                    <svg
                      className="w-6 h-6 -ml-2 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    Sign Up
                  </>
                )}
              </Button>
            </form>
            <div className="mt-6 border-b w-full text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                If you already have an account -
                <a href="/login" className="ml-1 text-blue-900 hover:underline">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

