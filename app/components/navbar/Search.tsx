
const Search = () => {
    return (
        <div className='hidden md:flex flex-1'>
            <input type="text" className='text-sm bg-gray-50 text-black flex flex-1 px-3 py-2 border-none outline-none rounded-bl-md rounded-tl-md' placeholder='Search' />
            <button className='p-2 bg-orange-900 rounded-tr-md rounded-br-md text-sm border border-transparent'>Search</button>
        </div>
    )
}
export default Search

// flex-1 means take up all the space available