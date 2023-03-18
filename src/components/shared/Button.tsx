interface ButtonProps {
    Child: any
    textColor?: string
    backgroundColor?: string
}


const Button = ({ Child, textColor, backgroundColor }: ButtonProps) => {
    return <button
        style={{
            color: textColor,
            backgroundColor: backgroundColor
        }}
    >
        <Child />

    </button>
}

export default Button