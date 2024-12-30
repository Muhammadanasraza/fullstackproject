// import { columns } from "@/components/StudentTable/column";
// import { StudentTable } from "@/components/StudentTable/data-table";

import {  Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger, } from "./ui/dialog";


export default function Students() {


    const user = "admin"
    // const user = "student"

    return (
        <div className="container max-w-screen-xl px-5 py-10 mx-auto">
            <div className="justify-between flex py-10 ">

                <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-bold text-gray-900">
                    Students
                </h1>
                {
                    user == "admin" ?
                        <Dialog>
                            
                                <DialogTrigger >Add Students</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                        </Dialog> :
                        ""
                }

            </div>

            {/* <div className=" ">
                <StudentTable columns={columns} data={studentData} />
            </div> */}
            {/* <Button className="max-sm ">Login </Button> */}
        </div>
    );
}