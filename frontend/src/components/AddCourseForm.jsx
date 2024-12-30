import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'

function AddCourseForm() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const [newStudent, setNewStudent] = useState({
        ImgUrl: "/placeholder.svg?height=32&width=32",
        name: "",
        message: "",
    })

    const handleNewStudentChange = (key, value) => {
        setNewStudent(prev => ({ ...prev, [key]: value }))
    }

    const handleAddStudent = () => {
        // Note: This function needs to be updated to properly add the student
        // to the main component's state. For now, we'll just close the dialog.
        console.log("course Detail",newStudent)
        setIsDialogOpen(false)
    }

    return (
        <div className="flex justify-center items-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="default">Add Students</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>
                            Enter the details of the new student here.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 ">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-start">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={newStudent.name}
                                onChange={(e) => handleNewStudentChange("name", e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="ImgUrl" className="text-start">
                                ImgUrl
                            </Label>
                            <Input
                                id="ImgUrl"
                                value={newStudent.ImgUrl}
                                onChange={(e) => handleNewStudentChange("ImgUrl", e.target.value)}
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
                                value={newStudent.message}
                                onChange={(e) => handleNewStudentChange("message", e.target.value)}
                                className="col-span-3"
                            />
                        </div>



                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddStudent} className="w-full">Add Student</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddCourseForm

