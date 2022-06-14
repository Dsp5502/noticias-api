import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {
  const { totalNoticias, noticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
      <Typography textAlign='center' marginY={5} component='h2' variant='h3'>
        Últimas Noticias
      </Typography>
      <Grid container spacing={3}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.url} />
        ))}
      </Grid>
      <Stack
        sx={{ marginY: 5 }}
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Pagination
          page={pagina}
          count={totalPaginas}
          color='primary'
          onChange={handleChangePagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
