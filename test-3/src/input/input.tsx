import styled from '@emotion/styled';
import { Input as TextFieldPrimitive } from '@mui/base/Input';

export const Input = styled(TextFieldPrimitive)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  width: 200px;

  &:focus {
    outline: 0;
    border-color: #0070f3;
  }
`;
