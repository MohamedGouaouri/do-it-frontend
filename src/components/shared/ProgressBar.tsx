import { useEffect, useState } from "react"


interface ProgressBarProps {
    initialValue: number,
    isRunning: Boolean
}

function ProgressBar({ initialValue, isRunning }: ProgressBarProps) {
    const [filled, setFilled] = useState<number>(initialValue)
    // const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => {
                setFilled(prev => prev += 2)
            }, 500)
        }
    }, [filled, isRunning])

    return <div className="progressbar">
        <div
            style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "#a66cff",
                transition: 'width 0.5s'
            }}
        >

        </div>
        <span>{filled}%</span>
    </div>
}


export default ProgressBar