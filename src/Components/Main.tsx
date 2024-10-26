

function Main() {
  return (
      <form>
        <div className="flex flex-row px-10 space-x-8 ">
          <input 
          type="input" 
          placeholder="Enter a task..." className=" h-10 w-3/5 text-md pl-3 pb-1 bg-white border-2 border-blue-600 rounded-full lg:text-center"/>
          <button type="submit" className="bg-green-500 px-4 border-2 border-gray-400 rounded-full">Submit</button>
        </div>
      </form>
  
  )
}

export default Main