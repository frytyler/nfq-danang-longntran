import style from 'styled-components';
import { Card, CardFooter, ListGroupItem, CardText, CardImg } from 'reactstrap';

const CardTextEllipsis = style(CardText)`
  color: rgba(0, 0, 0, .45);
  font-size: 14px;
  
  overflow: hidden;
  position: relative;
  max-height: 6em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
  
  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
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
