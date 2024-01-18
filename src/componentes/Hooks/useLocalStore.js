import { useState } from "react";

export function useLocalStorage(key, inicial) {
    
    const [storedValue, setStorageValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item? JSON.parse(item) : inicial
        }
        catch(error) {
            console.error(error)
            return inicial
        }
    })

    const setValue = value => {
        try {
            setStorageValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        }
        catch(error) {
            console.error(error)
        }
    }

    return [storedValue, setValue]
}