import { SignIn } from "@clerk/clerk-react"


const LoginPage = () => {
  return (
   <>
   <div className="flex items-center justify-center">
    <SignIn signUpUrl="/register" />
    </div>
   </>
  )
}

export default LoginPage
