import { signIn } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import GoogleButton from 'react-google-button'
import { useForm } from 'react-hook-form'

 const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data:any) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl:"/"
    })
    console.log(result)

    if (result?.url) {
      window.location.href = result.url
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: true })}
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus
                    focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register('password', { required: true })}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.28-7.47a.75.75 0 00-1.06-1.06l-2.47 2.47-1.47-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {/* <div>
                <button
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M18 2H2a2 2 0 00-2 2v14a2 2 0 002 2h8.3v-6.5H8.6v-2.5h1.7V8.8c0-1.7 1-2.6 2.5-2.6.7 0 1.3.1 1.5.2v1.7l-1 .1c-.8 0-.9.4-.9 1v1.3h1.8l-.2 2.5h-1.6V18H18a2 2 0 002-2V4a2 2 0 00-2-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
{/* 
              <div>
                <button
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover
                  :focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M20 4.35a8.15 8.15 0 01-2.35.65 4.1 4.1 0 001.8-2.25 8.24 8.24 0 01-2.6 1 4.1 4.1 0 00-7 3.75 11.7 11.7 0 01-8.5-4.3 4.1 4.1 0 001.25 5.5A4.06 4.06 0 01.8 6.9v.05a4.1 4.1 0 003.3 4 4.07 4.07 0 01-1.1.15 3.99 3.99 0 01-.8-.05 4.1 4.1 0 003.8 2.85A8.23 8.23 0 010 15.45 11.6 11.6 0 006.3 17.5c7.5 0 11.6-6.4 11.6-11.95v-.55A8.66 8.66 0 0020 4.35z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}

              {/* <div>
                <button onClick={() => signIn("google")}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover
                  :focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 9c-.34 0-.68.03-1.02.08-.93-.79-2.21-1.98-2.21-3.82 0-2.75 2.23-4.98 4.98-4.98a4.97 4.97 0 014.94 4.38c-.32-.06-.66-.08-1-.08-.57 0-1.13.09-1.65.25-.12.03-.23-.05-.34-.1-.71-.27-1.5-.42-2.3-.42-3.31 0-6.01 2.7-6.01 6.01s2.7 6.01 6.01 6.01c3.32 0 5.73-2.68 5.73-5.91 0-.39-.04-.77-.11-1.14-.02-.11-.1-.22-.15-.32-.45-.79-1.18-1.33-2.02-1.33z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M19.41 8.18h-8.14v3.28h4.78c-.24 1.38-1.5 2.01-2.58 2.01a2.38 2.38 0 01-2.5-2.5c0-.41.1-.73.23-1.07h-2.22v-.77h3.77c.04-.19.07-.39.07-.59 0-.6-.1-1.44-.64-2.01-.55-.56-1.41-.82-2.22-.82-1.69 0-3.16 1.4-3.16 3.16 0 .26.03.53.08.78H.59v.77h4.78a3.4 3.4 0 01-.08.77 3.16 3.16 0 003.16 3.16c.82 0 1.61-.31 2.22-.82.54-.56.64-1.4.64-2.01 0-.2-.03-.4-.07-.59h3.05z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}

              <div>
                <GoogleButton 
                 onClick={async () => {
                 await signIn('google',{
                  callbackUrl:"/", 
                  redirect:false,
                
                 })
                }}
                style={{marginLeft:"90px"}}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  Login