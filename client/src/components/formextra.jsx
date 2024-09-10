import { NavLink } from "react-router-dom";

export default function FormExtra(){
  return(
      <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-black focus:ring-yellow-400 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <NavLink to={"/forgot"} className="font-medium text-gray-500 hover:text-yellow-400">
          Forgot password?
        </NavLink>
      </div>
    </div>

  )
}