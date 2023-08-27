import { UseControlledForm } from "./useControlledForm"


export default function Login () {

    const { handleAll, event } = UseControlledForm({})


    return (
        <form>
            <input onChange={handleAll} value={event} name='username' />
            <input onChange={handleAll} value={event} name='password' type='password' />
        </form>
    )
}