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

function AddStudentForm() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const [newStudent, setNewStudent] = useState({
        avatar: "/placeholder.svg?height=32&width=32",
        name: "",
        email: "",
        batch: "",
        section: "",
    })

    const handleNewStudentChange = (key, value) => {
        setNewStudent(prev => ({ ...prev, [key]: value }))
    }

    const handleAddStudent = () => {
        // Note: This function needs to be updated to properly add the student
        // to the main component's state. For now, we'll just close the dialog.
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
                            <Label htmlFor="email" className="text-start">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={newStudent.email}
                                onChange={(e) => handleNewStudentChange("email", e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="batch" className="text-start">
                                Batch
                            </Label>
                            <Input
                                id="batch"
                                type="text"
                                value={newStudent.batch}
                                onChange={(e) => handleNewStudentChange("batch", e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="section" className="text-start">
                                Section
                            </Label>
                            <Input
                                id="section"
                                type="text"
                                value={newStudent.section}
                                onChange={(e) => handleNewStudentChange("section", e.target.value)}
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

export default AddStudentForm

