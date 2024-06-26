
const PropsChild = (props) => {
    const { dog, cat } = props.data;
    return (
        <div>
            <h1 className="props-h1">Props</h1>
            <h2 className="props-voices">Animal makes sound</h2>
            <h2 className="props-voices">Dog says {dog}</h2>
            <h2 className="props-voices">Cat says {cat}</h2>
        </div>
    )
}

export default PropsChild
