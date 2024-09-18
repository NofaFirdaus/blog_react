/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const FormSearchAndSort = ({ kategori, selectedCategory, handleCategoryChange, placeholder }) => {
 
    return (
        <section className="items-center flex flex-col mt-[8rem]">
            <form action="" className="w-full flex flex-col items-center">
                <input
                    type="text"
                    className="text-sm ring-[1.5px] w-[30%] px-4 ring-slate-950/40 focus:ring-slate-950 transition focus:ease-in ease-out h-[2.5rem] outline-none rounded-sm"
                    placeholder={placeholder}
                />
            </form>
            <form action="" className="w-full flex flex-wrap items-center justify-center gap-[2%] mt-[2rem]">

                {Object.values(kategori).map((category) => (
                    <>
                        <div className="flex items-center">
                            <input
                                className="peer"
                                id={category.id}
                                value={category.id}
                                type="radio"
                                hidden
                                name="kategori"
                                checked={selectedCategory === category.name}
                                onChange={() => handleCategoryChange(category.name)}
                            />
                            <label
                                htmlFor={category.id}
                                className={`${selectedCategory === category.name ? " text-port-gore-600" : "text-[#282938]/70"
                                    } transition ease-in font-medium text-sm ml-2 cursor-pointer`}
                            >
                                {category.name}
                            </label>
                        </div>
                    </>
                ))}
            </form>
        </section>
    );
};

export default FormSearchAndSort;
