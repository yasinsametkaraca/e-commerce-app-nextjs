"use client"

const Category = () => {
    const categoryList = [
        { name: "All", id: 1 },
        { name: "Technology", id: 2 },
        { name: "Science", id: 3 },
        { name: "Mathematics", id: 4 },
        { name: "History", id: 5 },
        { name: "Geography", id: 6 },
        { name: "Art", id: 7 },
        { name: "Music", id: 8 },
        { name: "Language", id: 9 },
        { name: "Animals", id: 16 },
        { name: "Other", id: 22 },
    ]

    return (
        <div className="flex items-center justify-center gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto px-3 md:px-10">
            {
                categoryList.map((category) => (
                    <div key={category.id} className="px-4 py-2 flex flex-1 min-w-[100px] items-center justify-center rounded-full bg-gray-100 text-slate-800 hover:bg-gray-200 cursor-pointer text-center">
                        {category.name}
                    </div>
                ))
            }
        </div>
    )
}
export default Category
