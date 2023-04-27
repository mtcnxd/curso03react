import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'

const CreateNew = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname]   = useState('')

    const sendFormData = (e) => {
        e.preventDefault()
        const firstname = document.querySelector("#nombre").value
        const lastname  = document.querySelector("#apellido").value

        setFirstname(firstname)
        setLastname(lastname) 

        try {
            const { data } = axios.post(
                'http://127.0.0.1:3001/insert', {
                    category_name: firstname,
                    category_type: lastname
                }
            )

            Swal.fire(
                'Message',
                'Datos guardados con exito',
                'success'
            )

            limpiarCampos()
            console.log(data)

        } catch (err) {
            console.log("Error: " + err)    
        }
    }

    const limpiarCampos = () => {
        setFirstname('')
        setLastname('')
        console.log('Limpiar campos')
    }

    return (
        <div>
            <h2>Crear Nuevo</h2>
            <form onSubmit={sendFormData}>
                <div className="col-md-3">
                    <input type="text" className="form-control" id="nombre" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" id="apellido" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </div>
                <input type="submit" className="btn btn-primary" value="Guardar" />
                <input type="button" className="btn btn-primary" onClick={limpiarCampos} value="Cancelar" />
            </form>
        </div>
    )
}

export default CreateNew