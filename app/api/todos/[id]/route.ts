import { NextResponse } from "next/server";

// Url of data
const DATA_SOURCE_URL= "https://jsonplaceholder.typicode.com/todos"

type Props={
    params:{
        id: string,
    }
}

// Get
export async function GET(request: Request, {params: {id}}: Props){
    // This Old Way
    // const id = request.url.slice(request.url.lastIndexOf(`/` + 1))

    // This Current Way With (Middleware)


    // fetch data
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

    // Store data
    const todo: Todo = await res.json()

    if (!todo.id) return NextResponse.json({"message": "Failed"})

    // return data
    return NextResponse.json(todo)
}