import './Champion.style.css'

export const Champion = (props) => {
    return (
        <div className='champion'>
            {/* <img alt='champion' src={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${props.champion.image.full}`} /> */}
            <img alt='champion' src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion.image.full.split(".")[0] + '_0.jpg'}`} />
            {/* {console.log(imageName[0]+'_0.'+imageName[1])} */}
            <h2>{props.champion.name}</h2>
            <p>{props.champion.title}</p>
        </div>
    )
}