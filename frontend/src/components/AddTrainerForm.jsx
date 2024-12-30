'use client'

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



function AddTrainerForm() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const [newTrainer, setNewTrainer] = useState({
        courseName: "",
        batchName: "",
        studentName: "",
        avatarUrl: "https://github.com/shadcn.png" // Default avatar URL
    })

    const handleNewTrainerChange = (key, value) => {
        setNewTrainer(prev => ({ ...prev, [key]: value }))
    }

    const handleAddTrainer = () => {
        // Here you would typically add the new trainer to your main state or send to an API
        console.log("New Trainer:", newTrainer)
        setIsDialogOpen(false)
        // Reset the form
        setNewTrainer({
            courseName: "",
            batchName: "",
            studentName: "",
            avatarUrl: "https://github.com/shadcn.png"
        })
    }

    return (
        <div className="flex justify-center items-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="default">Add Trainer</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Trainer</DialogTitle>
                        <DialogDescription>
                            Enter the details of the new trainer here.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4   ">
                        <div className="grid grid-cols-4 items-center  gap-4">
                            <Label htmlFor="studentName" className="text-start">
                                Name
                            </Label>
                            <Input
                                id="studentName"
                                value={newTrainer.studentName}
                                onChange={(e) => handleNewTrainerChange("studentName", e.target.value)}
                                className="col-span-3 "
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center text-le gap-4">
                            <Label htmlFor="courseName" className="text-start">
                               Course 
                            </Label>
                            <Input
                                id="courseName"
                                value={newTrainer.courseName}
                                onChange={(e) => handleNewTrainerChange("courseName", e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="batchName" className="text-start">
                               Batch 
                            </Label>
                            <Input
                                id="batchName"
                                value={newTrainer.batchName}
                                onChange={(e) => handleNewTrainerChange("batchName", e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="avatarUrl" className="text-start">
                                img URL
                            </Label>
                            <Input
                                id="avatarUrl"
                                value={newTrainer.avatarUrl}
                                onChange={(e) => handleNewTrainerChange("avatarUrl", e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleAddTrainer} className="w-full">Add Trainer</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddTrainerForm

