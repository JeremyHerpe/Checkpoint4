import React from "react";

const Article = () => {

    return (
        <>
            <div
                class="flex flex-row rounded-lg bg-gray-100 border border-gray-800 px-5 py-5 cursor-pointer">
                <img
                    class=" object-cover h-auto w-32 rounded-l-lg"
                    src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                    alt="" />
                <div class="flex flex-col justify-start p-6 font-Lugrasimo">
                    <h5
                        class="mb-2 text-xl font-bold uppercase text-neutral-800 ">
                        Lorem ipsum dolor sit amet.
                    </h5>
                    <p class="mb-1 text-base text-neutral-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus enim nulla deleniti, laboriosam corporis cupiditate.
                    </p>
                    <p class="text-xs text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur iure temporibus tempore quo illo eaque quis dolore odio mollitia.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Article