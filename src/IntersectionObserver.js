import { useEffect, useRef, useState } from "react";


export default ({ root = null, rootMargin = '0px 0px 0px 0px', threshold = 0 }) => {

    const isClient = typeof window === "object"
    const [entry, updateEntry] = useState({})
    const [node, setNode] = useState(null)
    let observer = null

    if (isClient) {
        observer = useRef(
            new window.IntersectionObserver(([intersectionEntry]) => updateEntry(intersectionEntry), {
                root,
                rootMargin,
                threshold
            })
        )
    }

    const unObserve = () => {
        const { current: currentObserver } = observer
        currentObserver.disconnect()
    }

    useEffect(() => {
        if (!isClient) {
            return false
        }

        const { current: currentObserver } = observer
        currentObserver.disconnect()

        if (node) currentObserver.observe(node)
        return () => currentObserver.disconnect()
    }, [node])


    return [setNode, entry, unObserve]


}