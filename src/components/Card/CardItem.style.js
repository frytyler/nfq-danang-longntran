import style from 'styled-components';
import { Card, CardFooter, CardText, ListGroupItem, CardImg } from 'reactstrap';

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

const ListGroupItemWrapper = style(ListGroupItem)`
  text-align: center;
  background: #fafafa;
  flex: 1;
  border: 0;
  padding: 0 1.25rem;
  margin: .75rem 0 !important;
  border-right: 1px solid #ccc !important;
  
  &:last-child {
    border-right: 0 !important;
  }
`;

const CardImgWrapper = style(CardImg)`
  max-height: 230px;
  object-fit: cover;
`;

export {
  CardTextEllipsis,
  CardFooterWrapper,
  FullHeightCard,
  ListGroupItemWrapper,
  CardImgWrapper,
};
