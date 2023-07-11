import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';

// sections
import { RegisterForm } from '../sections/auth/register';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 900,

  margin: '50px 10px',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '8px',
  padding: theme.spacing(10, 0),
  margin: theme.spacing(-7, 0, 2, 2),
}));

const imageStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: 'auto',
  marignLeft: '40px',
  width: '100%',
  padding: '50px',
  marginBottom: '20px',
};

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');

  return (
    <Page title="Register">
      <RootStyle>
        {smUp && (
          <div style={imageStyle}>
            <img src="/static/illustrations/inventory-management.png" alt="login" />
          </div>
        )}
        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Register
            </Typography>

            <Typography sx={{ mb: 1 }}>Manage all your inventory efficiently</Typography>
            <Typography sx={{ color: 'text.secondary', mb: 5 }}>
              Let's get you all set up so you can verify your personal account and begin setting up your work profile
            </Typography>

            {/* <AuthSocial /> */}

            <RegisterForm />

            <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
              I agree to all terms,&nbsp;
              <Link underline="none" color="text.primary" href="#">
                privacy policies,
              </Link>{' '}
              and{' '}
              <Link underline="none" color="text.primary" href="#">
                fees
              </Link>
            </Typography>

            {smUp && (
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                Already have an account?{' '}
                <Link underline="none" variant="subtitle2" to="/login" component={RouterLink}>
                  Log in
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
