import { styled, alpha } from '@mui/material/styles';
import { Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener } from '@mui/material';
import Iconify from './Iconify';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  //   top: 0,
  //   left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  //   position: 'absolute',
  alignItems: 'center',
  //   height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  //   padding: theme.spacing(0, 3),
  //   boxShadow: theme.customShadows.z8,
  boxShadow: '0 8px 16px 0 rgb(67 161 255 / 24%);',
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: 64,
    padding: theme.spacing(0, 5),
  },
}));

function SearchComponent() {
  return (
    <div>
      {/* <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit> */}
      <SearchbarStyle>
        <Input
          autoFocus
          fullWidth
          disableUnderline
          placeholder="Search…"
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
          sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
        />
        <Button variant="contained" onClick={'handleClose'}>
          Search
        </Button>
      </SearchbarStyle>
      {/* </Slide> */}
    </div>
  );
}

export default SearchComponent;
