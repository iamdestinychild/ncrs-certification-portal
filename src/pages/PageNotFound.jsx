import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div className="flex w-full h-screen gap-3 flex-col items-center justify-center">
            <h1 className="text-9xl font-semibold">404</h1>
            <p>Oops.....The Page you&apos;re looking for does&apos;nt exist</p>
            <Button type={'primary'} onClick={() => navigate("/")}>Back to Safety</Button>
        </div>
    )
}

export default PageNotFound