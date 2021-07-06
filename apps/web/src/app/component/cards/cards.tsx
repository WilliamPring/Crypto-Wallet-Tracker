import './cards.module.scss';

/* eslint-disable-next-line */
export interface CardsProps {}

export function Cards(props: CardsProps) {
  return (
    <div style={{ display: 'flex' }}>
      <span>Bitcoin</span>
      <span>23</span>
      <span>33</span>
    </div>
  );
}

export default Cards;
