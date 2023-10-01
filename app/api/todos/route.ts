// This Application On Rest API (Get, Delete, Post, Put)
import { NextResponse } from "next/server";

// Url of data
const DATA_SOURCE_URL= "https://jsonplaceholder.typicode.com/todos"

const API_Key:string = process.env.DATA_API_KEY as string

// Get
export async function GET(){
    // fetch data
    const res = await fetch(DATA_SOURCE_URL)

    // Store data
    const todos: Todo[] = await res.json()

    // return data
    return NextResponse.json(todos)
}


// Delete
export async function DELETE(){
    // id for element selected to delete
    const {id}: Partial<Todo> = await request.json()

    if (!id) return NextResponse.json({"Message": "Id Todo Not Found"})

    await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "API_Key": API_Key
        }
    })

    return NextResponse.json({"message": `Todo ${id} deleted`})
}

// Post
export async function POST(){
    const {userId, title}: Partial<Todo> = await request.json()

    if (!userId || !title) return NextResponse.json({"Message": "User id Todo Not Found"})

    const res =  await fetch(`${DATA_SOURCE_URL}`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "API_Key": API_Key
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    })

    const newTodo = await res.json()
    return NextResponse.json({newTodo})
}

// Put === Edit
export async function PUT(){
    const {userId,id ,title, completed}: Todo = await request.json()

    if (!userId || !id || !title || typeof(completed) !== "boolean") return NextResponse.json({"Message": "User id Todo Not Found"})

    const res =  await fetch(`${DATA_SOURCE_URL}/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "API_Key": API_Key
        },
        body: JSON.stringify({
            userId, title, completed
        })
    })

    const updatedTodo = await res.json()
    return NextResponse.json({updatedTodo})
}