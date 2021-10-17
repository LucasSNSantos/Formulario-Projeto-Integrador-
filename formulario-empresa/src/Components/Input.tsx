import '../styles/input.scss'
import { type } from "os"
import {InputHTMLAttributes} from "react"

type InputProps =  InputHTMLAttributes<HTMLInputElement>; 


export function Input(props:InputProps)
{
    return (
        <input className="input"{...props} />
    )
}