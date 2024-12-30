'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CourseCard() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Here you would typically send the form data to your backend
        setIsDialogOpen(false)
        // Reset form data
        setFormData({ name: '', email: '', phone: '', message: '' })




    }

    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-60 max-sm:w-[335px]">
                <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl object-center"
                    src="https://img.freepik.com/free-psd/back-school-new-normal-banner_23-2149027689.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid"
                />
                <Card className="p-2 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                            Web and Mobile Development
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-col gap-4">
                            <p>Lorem ipsum dolor sit amet  elit. Distinctio magnam.</p>
                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="default">Apply Now</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Apply for Web and Mobile Development</DialogTitle>
                                        <DialogDescription>
                                            Fill out this form to apply for the course. We'll get back to you soon.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-start">
                                                    Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="email" className="text-start">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="col-span-3"
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="phone" className="text-start">
                                                    Phone
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="col-span-3"
                                                />
                                            </div>
                                           
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="message" className="text-start">
                                                    Message
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="col-span-3"
                                                />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button className="w-full" type="submit">Submit Application</Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

