import { toast } from "react-toastify";

export const notify = (type, text) => {
    if (type === "success") {
        toast.success(text)
    }
    else if(type === "error") {
        toast.error(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
  
}