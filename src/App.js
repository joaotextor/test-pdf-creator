import { Formik } from 'formik'
import { jsPDF } from 'jspdf'
import {
  Button,
  TextField,
  Container,
  Grid,
  Typography
} from '@mui/material'

export default function App() {
  const pdfDocument = new jsPDF()
  
  const handleFormSubmit = (values) => {
    pdfDocument.setFont('times', 'normal', 'bold')
    pdfDocument.text(`Nome:`, 10, 10)
    pdfDocument.setFont('times', 'normal', 'normal')
    pdfDocument.text(values.name, 30, 10)
    pdfDocument.setFont('times', 'normal', 'bold')
    pdfDocument.text(`Email:`, 10, 20)
    pdfDocument.setFont('times', 'normal', 'normal')
    pdfDocument.text(values.email, 30, 20)
    pdfDocument.setFont('times', 'normal', 'bold')
    pdfDocument.text(`Assunto:`, 10, 30)
    pdfDocument.setFont('times', 'normal', 'normal')
    pdfDocument.text(values.subject, 10, 40)
    pdfDocument.setFont('times', 'normal', 'bold')
    pdfDocument.text(`Texto:`, 10, 50)
    pdfDocument.setFont('times', 'normal', 'normal')
    pdfDocument.text(values.text, 10, 60, {maxWidth: 200})
    

    pdfDocument.save()


  }

  return (
    <>
      <Formik
        initialValues={{
          name:'',
          email:'',
          subject:'',
          text:''
        }}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Container align="center">
              <Typography variant="h2" component="h1" sx={{marginBottom: "20px"}}>E-mail</Typography>
              <Grid container
                lg={8.5}
                sx={{
                  justifyContent: "center",
                  marginBottom: '20px'
                }}
                gap={2}
              >
                <Grid item>

                  <TextField
                    fullWidth
                    name='name'
                    label='Name'
                    variant='standard'
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    fullWidth
                    name='email'
                    type='email'
                    label='E-mail'
                    variant='standard'
                    value={values.email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Grid container lg={8.5} sx={{
                marginBottom: "20px",
                justifyContent: "center",
                }}>
                <Grid item xs={7.5} sm={4.5} lg={6}>
                  <TextField
                    fullWidth
                    name='subject'
                    label='Subject'
                    variant='standard'
                    value={values.subject}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Grid container lg={8.5} sx={{
                marginBottom: "20px",
                justifyContent: "center",
                }}>
                <Grid item xs={7.5} sm={4.5} lg={6}>
                  <TextField
                    fullWidth
                    multiline
                    name='text'
                    label='Text'
                    variant='standard'
                    value={values.text}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                width="200px"
                variant='contained'
                type="submit"
              >
                Send
              </Button>

            </Container>



          </form>
        )
        }


      </Formik>
    </>
  )
}