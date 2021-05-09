import { Champion } from '../champion/Champion.component'

import './ChampionsList.style.css'

export const ChampionsList = (props) => {
    return (
        <div className='champions-list'>
            {props.champions.map(champion => (
                <Champion key={champion.key} champion={champion} />
            ))}
        </div>
    )
}

