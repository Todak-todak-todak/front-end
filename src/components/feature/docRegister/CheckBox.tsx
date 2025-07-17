import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

// 체크되지 않은 상태
const CustomIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
  border: `2px solid ${theme.palette.grey[700]}`,
  backgroundColor: 'transparent',
}));

// 체크된 상태
const CustomCheckedIcon = styled(CustomIcon)(({ theme }) => ({
  backgroundColor: '#fff',
  border: `2px solid ${theme.palette.grey[700]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::before': {
    content: '""',
    display: 'block',
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '#275AEC',
  },
}));

interface CircleCheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
}

const CircleCheckbox = ({
  checked,
  onChange,
  ...rest
}: CircleCheckboxProps) => {
  return (
    <Checkbox
      disableRipple
      color="default"
      checked={checked}
      onChange={onChange}
      checkedIcon={<CustomCheckedIcon />}
      icon={<CustomIcon />}
      {...rest}
    />
  );
};

export default CircleCheckbox;
