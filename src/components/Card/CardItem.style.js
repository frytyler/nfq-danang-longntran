import style from 'styled-components';
import { Card, CardFooter, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const CardTextEllipsis = style(CardText)`
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 100px; 
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
`;

const FullHeightCard = style(Card)`
  height: 100%;
`;

const CardFooterWrapper = style(CardFooter)`
  padding: 0;
`;

const ListGroupWrapper = style(ListGroup)`
  flex-direction: row;
`;

const ListGroupItemWrapper = style(ListGroupItem)`
  text-align: center;
  flex: 1;
`;

export {
  CardTextEllipsis,
  CardFooterWrapper,
  FullHeightCard,
  ListGroupWrapper,
  ListGroupItemWrapper,
};
