

const Story = ({ imageSrc, name }) => {
    return (
        <div className="w-24 h-40 p-2">
            <img src={imageSrc} alt={name} className="w-full h-full rounded-lg" />
            <p className="text-xs text-center mt-2">{name}</p>
        </div>
    );
};

export default Story;
