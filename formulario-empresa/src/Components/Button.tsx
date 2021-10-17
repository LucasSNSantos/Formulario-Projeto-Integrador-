import '../styles/button.scss'
import { type } from "os"
import {ButtonHTMLAttributes} from "react"

type ButtonProps =  ButtonHTMLAttributes<HTMLButtonElement>; 


export function Button(props:ButtonProps)
{
    return (
        <button className="button"{...props} />
    )
}