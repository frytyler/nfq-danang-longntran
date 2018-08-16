import style from 'styled-components';
import { Card, CardText } from 'reactstrap';

const CardTextEllipsis = style(CardText)`
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 100px; 
`;

const FullHeightCard = style(Card)`
  height: 100%;
`;

export {
  CardTextEllipsis,
  FullHeightCard,
};
