import styled from 'styled-components';
import { StyledIcon } from '../StyledIcon/StyledIcon';

export const StyledSocialIcon = styled(StyledIcon)`
  margin: 0 20px;
  width: 50px;
  height: 50px;
  ${({ theme }) => theme.mq.desktop} {
    width: 25px;
    height: 25px;
    margin: 0 15px;
  }
`;
