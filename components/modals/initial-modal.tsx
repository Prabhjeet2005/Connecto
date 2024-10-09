"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog"

export const InitialModal = () => {
    return ( 
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center">
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className="text-zinc-500 text-center">
                        Give your server personality by adding a name and image.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>
     );
}
 
export default InitialModal;