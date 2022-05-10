function Image (props) {
    // this is called inline styling
    return <img src={props.src} style={{
        width: "200px",
        height: "200px",
        objectFit: "cover"
    }} alt={props.alt} />
}

export default Image