import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import MenuAdmin from '../../../components/menu-admin'
import Footer from '../../../components/footer-admin';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function UsuarioListagem() {
  const classes = useStyles();

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function loadUsuarios() {
      const response = await api.get("/api/usuarios");
      setUsuarios(response.data)
    }
    loadUsuarios()
  }, [])

  return (
    <div className={classes.root}>
      <MenuAdmin title={'USUÁRIOS'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12} >
            <Paper className={classes.paper}>
              <h2>Listagem de Usuários</h2>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nome</TableCell>
                          <TableCell align="center">Email</TableCell>
                          <TableCell align="center">Tipo</TableCell>
                          <TableCell align="center">Data de Cadastro</TableCell>
                          <TableCell align="center">Opções</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {usuarios.map((row) => (
                          <TableRow key={row._id}>
                            <TableCell component="th" scope="row">
                              {row.nome_usuario}
                            </TableCell>
                            <TableCell align="center">{row.email_usuario}</TableCell>
                            <TableCell align="center">
                              {
                                row.tipo_usuario === 1 ? 
                                  <Chip
                                    label="Administrador"
                                    color="primary"
                                  />
                                    :
                                  <Chip
                                  label="Funcionário"
                                  color="secondary"
                                />
                              }
                            </TableCell>
                            <TableCell align="center">{new Date(row.createdAt).toLocaleDateString('pt-br')}</TableCell>
                            <TableCell align="right">
                              <ButtonGroup size="small" aria-label="small outlined button group">
                                <Button color="primary">Atualizar</Button>
                                <Button color="secondary">Excluir</Button>
                              </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}