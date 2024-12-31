'use client'

import React, { useState } from "react"
import { auth, provider, signInWithPopup } from "@/auth/utils/authutils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'
import { useNavigate } from "react-router"
import { useToast } from "@/hooks/use-toast"

const Login = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e ) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = async (e ) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:8000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        let errorMessage = 'Login failed'
        try {
          const errorData = await response.json()
          errorMessage = errorData.message || errorMessage
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError)
        }
        throw new Error(errorMessage)
      }

    const data = await response.json()
      console.log('Login successful:', data)
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      })
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "There was a problem logging in.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const googleLogin = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result)
      if (result) {
        toast({
          title: "Google Login Successful",
          description: "Welcome back!",
        })
        router.push('/')
      }
    }).catch((error) => {
      console.error('Google login error:', error)
      toast({
        title: "Google Login Failed",
        description: "There was a problem logging in with Google.",
        variant: "destructive",
      })
    })
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
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold mb-6">Sign In</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
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
                    Sign In
                  </>
                )}
              </Button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-sm text-blue-600 hover:underline">
                Sign Up
              </a>
            </p>
            <div className="my-6 border-b w-full text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign in with Google
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full max-w-xs"
              onClick={googleLogin}
              disabled={isLoading}
            >
              <div className="bg-white p-2 rounded-full mr-2">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              Sign In with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

