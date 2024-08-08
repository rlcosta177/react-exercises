import pfp from './assets/Sin título.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={pfp} alt="pfp" />
            <h2 className='card-title'>rlc</h2>
            <p className='card-text'>random ah description</p>
        </div>
    );
}

export default Card