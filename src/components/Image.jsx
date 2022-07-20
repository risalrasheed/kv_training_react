const Image = (
    {src, alt, height, width, id}
) => {
    return (
        <img src={src} alt={alt} height={height} width={width} id={id}/>
    );
}

export default Image;