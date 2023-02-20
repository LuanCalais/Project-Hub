import './Card.css'

const Card = () => {
  return (
    <div className='card'>
        <div className='card-header'>
            {/* TODO: Aqui vai a função do integrante */}
        </div>

        <div className='card-picture'>
            {/* TODO: Aqui vai a foto do participante */}
        </div>

        <div className='card-info'>
            <h5>Nome do participante</h5>
            <sub>Sub título</sub>
        </div>
    </div>
  );
};

export default Card;
