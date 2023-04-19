

export default function Card ({img}){
    return (
        <div className="mb-10px w-227px  xs:w-247px h-172px rounded border-2">
            <img className="h-full w-full" src={img} />
        </div>
    )
}