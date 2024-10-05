export default function FormAction({
  handleSubmit,
  type='Button',
  action='submit',
  text,
  disabled
}){
  return(
      <>
      {
          type==='Button' ?
          <button
              type={action}
              className="group  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-yellow-300 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-yellow-300 mt-10"
              onSubmit={handleSubmit}
              disabled={disabled}
          > 
              {text}
          </button>
          :
          <></>
      }
      </>
  )
}