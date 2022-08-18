import { useState , useEffect } from "react"
import axios from 'axios'


const useRym = URL => {

    const [LocR, setLocR] = useState()

    useEffect (
        () => {

            axios.get(URL)
            .then (res => setLocR(res.data))
            .catch (err => console.log(err))

        } , [URL]
    )

    return LocR

}

export default useRym