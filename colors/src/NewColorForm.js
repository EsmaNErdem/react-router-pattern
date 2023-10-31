import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({addColor}) => {
    const [formData, setFormData] = useState({name: "", hex:"#ffffff"})
    const history = useHistory();
    
    const handleSubmit = e => {
        e.preventDefault()
        addColor({[formData.name]: formData.hex})
        history.push("/colors")
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New Todo Task:</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="hex">Choose Color</label>
            <input 
                id="hex"
                name="hex"
                type="color"
                value={formData.hex}
                onChange={handleChange}
            />
            <button>Add color!</button>
        </form>
    )
}

export default NewColorForm;